import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Hideout", function () {
  async function setupTest() {
    const [deployer, user] = await ethers.getSigners();
    const Hideout = await ethers.getContractFactory("Hideout");
    const hideout = await Hideout.deploy();
    await hideout.deployed();

    return { deployer, user, hideout };
  }

  describe("Metadata", function () {
    it("name, symbol check", async function () {
      const { hideout } = await setupTest();

      expect(await hideout.name()).to.equal("HIDEOUT");
      expect(await hideout.symbol()).to.equal("HDOT");
    });

    it("baseURI check", async function () {
      const { hideout } = await setupTest();

      expect(await hideout.baseURI()).to.equal(
        "ipfs://QmagUeAx45Pjt69XS3sKuTAE2kidvW3VPGsN1LX7azMESS/"
      );
    });
  });

  describe("Mint", function () {
    it("mint 1 token", async function () {
      const { deployer, user, hideout } = await setupTest();

      await hideout.mint(user.address, 1);
      expect(await hideout.balanceOf(user.address)).to.equal(1);

      // token uri check
      expect(await hideout.tokenURI(0)).to.equal(
        "ipfs://QmagUeAx45Pjt69XS3sKuTAE2kidvW3VPGsN1LX7azMESS/0"
      );
    });

    it("mint 500 tokens", async function () {
      const { deployer, user, hideout } = await setupTest();

      await hideout.mint(user.address, 500);
      expect(await hideout.balanceOf(user.address)).to.equal(500);

      // token uri check
      expect(await hideout.tokenURI(0)).to.equal(
        "ipfs://QmagUeAx45Pjt69XS3sKuTAE2kidvW3VPGsN1LX7azMESS/0"
      );
      expect(await hideout.tokenURI(499)).to.equal(
        "ipfs://QmagUeAx45Pjt69XS3sKuTAE2kidvW3VPGsN1LX7azMESS/499"
      );
    });

    it("mint 500 tokens with gas", async function () {
      const { deployer, user, hideout } = await setupTest();

      // gas check
      const tx = await hideout.mint(user.address, 500);
      const receipt = await tx.wait();
      expect(receipt.gasUsed.toNumber()).to.be.lessThan(1100000);

      expect(await hideout.balanceOf(user.address)).to.equal(500);
    });
  });
});
