<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!--
*** This README is created using template from https://github.com/othneildrew/Best-README-Template
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![GPL-3.0 License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/sadityakumar9211/medichain-thegraph">
    <img src="logo.svg" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">MediChain: Decentralized Medical Record Keeping System</h3>

  <p align="center">
    This repository is one of the three repositories which are part of MediChain Project.
    <br />
    <a href="https://github.com/sadityakumar9211/medichain-hardhat"><strong> <i>medichain-hardhat</i>: Hardhat Repository of MediChain Project»</strong></a>
    <br>
    <a href="https://github.com/sadityakumar9211/medichain-nextjs"><strong> <i>medichain-nextjs</i>: The Next.js Repository of MediChain Project»</strong></a>
    <br>
    <br />
    <a href="https://youtube.com/playlist?list=PLJ2CQ-kV7OQFkZfmnPIGMQLbhEUKIyWln">Watch Demo Videos</a>
    <br />
    <a href="https://medichain.vercel.app">View Demo</a>
    ·
    <a href="https://github.com/sadityakumar9211/medichain-thegraph/issues">Report Bug</a>
    ·
    <a href="https://github.com/sadityakumar9211/medichain-thegraph/issues">Request Feature</a>
  </p>
</div>

### This is the `The Graph` repository of this project.

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#requirements">Requirements</a></li>
        <li><a href="#quickstart">Quickstart</a></li>
      </ul>
    </li>
    <li><a href="#locally-deploying">Locally Deploying</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<img width="1278" alt="image" src="https://user-images.githubusercontent.com/78147198/184471278-42e393d0-db94-4577-bdc9-328510b777c0.png">

**Blockchain** being an immutable ledger and with decentralized nature has a great potential for increasing the security, privacy and efficiency of Medical Health Record keeping systems. Currently existing solutions rely on centralised database which are susceptible to _Ransomware attacks, Denial of Service(DoS) attacks and also have significant counterparty risks_. Some decentralized solutions are also exist but some of them are not really decentralized that are based on private or permis- sioned blockchain, while some which are based on public blockchain have not properly addressed the performance and scalability issues.

The proposed system is based on EVM compatible public blockchains using IPFS as a decentralized file storage solution and uses 2048 bit RSA encryption to encrypt the IPFS HASH of file metadata on the client-side before uploading the HASH on the blockchain. For supporting fast and complex queries this system uses a decentralized indexing protocol _The Graph_. The smart contract is currently deployed on _Goerli Testnet_.

With this system patients can access their medical records anytime anywhere without the counterparty risk from centralized entity. This system also features QR code for sharing of medical files from patients to doctors. With the proposed implementation the decentralized medical record keeping system provides increased security and privacy compared to centralized systems without loss of significant performance or scalability benefits.

### The links to other repositories of this project is at the top.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

This repository contains the code for developing a subgraph which indexes the smart-contract deployed in the [medichain-hardhat](https://github.com/sadityakumar9211/medichain-hardhat) repository.

- [![The Graph][the graph]][graph-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

# Getting Started

## Requirements

- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
  - You'll know you did it right if you can run `git --version` and you see a response like `git version x.x.x`
- [Nodejs](https://nodejs.org/en/)
  - You'll know you've installed nodejs right if you can run:
    - `node --version` and get an ouput like: `vx.x.x`
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/) instead of `npm`
  - You'll know you've installed yarn right if you can run:
    - `yarn --version` and get an output like: `x.x.x`
    - You might need to install it with `npm`
- Optional Instruction
  - Make sure that this repository and `medichain-hardhat` repository are in the same level in your directory structure.
  - This makes sure that whenever you deploy the smart contract, this repository's `constants` files are updated.

## Quickstart

1. Install Subgraph CLI

```
yarn global add @graphprotocol/graph-cli
```

2. Log into [the graph UI](https://thegraph.com/studio/subgraph) and create a new Subgraph.

Use Goerli as the network.

3. Initialize Subgraph

```
graph init --studio medichain
```

4. Authenticate CLI

```
graph auth  --studio YOUR_DEPLOY_KEY_HERE
```

5. Update your `subgraph.yaml`:

- Update the `address` with your `PatientMedicalRecordSystem` Contract Address
- Update the `startBlock` with the block right before your contract was deployed

6. Build graph locally

```
graph codegen && graph build
```

- `graph codegen`: Generates code in the `generated` folder based on your `schema.graphql`
- `graph build`: Generates the build that will be uploaded to the graph

7. Deploy subgraph

Replace `VERSION_NUMBER_HERE` with a version number like `v0.0.1`.

```
graph deploy --studio medichain -l VERSION_NUMBER_HERE
```

8. Update the temporary query URI in the Next.js project

- update the `uri` in your `_app.js` with the temporary query URI generated after deploying your subgraph.

- To start your frontend run:

```
yarn dev
```

### Optional Gitpod

If you can't or don't want to run and install locally, you can work with this repo in Gitpod. If you do this, you can skip the `clone this repo` part.

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#github.com/sadityakumar9211/medichain-thegraph)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the `GPL-3.0 License`. See [COPYING](https://github.com/sadityakumar9211/medichain-thegraph/blob/main/COPYING) for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

If you appreciated this, feel free to follow me or donate!

ETH Address: 0xED5A704De64Ff9699dB62d09248C8d179bb77D8A

[![Aditya Singh Linkedin](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/saditya9211/)
[![Aditya Singh Twitter](https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/sadityakumar921)
[![Aditya Singh StackOverflow](https://img.shields.io/badge/StackOverflow-gray?style=for-the-badge&logo=stackoverflow&logoColor=orange)](https://stackoverflow.com/users/14769639/saditya)
[![Aditya Singh Medium](https://img.shields.io/badge/Medium-000000?style=for-the-badge&logo=medium&logoColor=white)](https://medium.com/@sadityakumar9211)
[![Aditya Singh Gmail](https://img.shields.io/badge/Gmail-gray?style=for-the-badge&logo=gmail)](mailto:sadityakumar9211@gmail.com)

Project Link: [https://github.com/sadityakumar9211/medichain-hardhat](https://github.com/sadityakumar9211/medichain-hardhat)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [Choose an Open Source License](https://choosealicense.com)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/sadityakumar9211/medichain-thegraph.svg?style=for-the-badge
[contributors-url]: https://github.com/sadityakumar9211/medichain-thegraph/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/sadityakumar9211/medichain-thegraph.svg?style=for-the-badge
[forks-url]: https://github.com/sadityakumar9211/medichain-thegraph/network/members
[stars-shield]: https://img.shields.io/github/stars/sadityakumar9211/medichain-thegraph.svg?style=for-the-badge
[stars-url]: https://github.com/sadityakumar9211/medichain-thegraph/stargazers
[issues-shield]: https://img.shields.io/github/issues/sadityakumar9211/medichain-thegraph.svg?style=for-the-badge
[issues-url]: https://github.com/sadityakumar9211/medichain-thegraph/issues
[license-shield]: https://img.shields.io/github/license/sadityakumar9211/medichain-thegraph.svg?style=for-the-badge
[license-url]: https://github.com/sadityakumar9211/medichain-thegraph/blob/main/COPYING
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/saditya9211
[product-screenshot]: https://user-images.githubusercontent.com/78147198/184471278-42e393d0-db94-4577-bdc9-328510b777c0.png

<!-- This is the beginning of the URLs of Badges -->

[the graph]: https://img.shields.io/badge/The_Graph-23243B?style=for-the-badge&logoColor=6DE9DB
[graph-url]: https://thegraph.com/en/
