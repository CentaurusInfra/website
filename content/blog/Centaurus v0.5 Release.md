---
title: "Centaurus v0.5 is live!"
author: "Mengni Zhang, Deepak Vij, Xiaoning Ding"
date: "2021-6-7"
---

The **Centaurus** Infrastructure Project is a cloud infrastructure platform for building distributed cloud as well as a platform for modern cloud native computing. It supports applications and workloads for 5G, Edge and AI and unifies the orchestration, network provisioning and management of cloud compute and network resources at a regional scale.

### Centaurus v0.5 Release

On June 4th, the Centaurus community is proud to announce the availability of Centaurus v0.5. In this release, we are introducing work from all of the Centaurus SIGs:

* Scalability: Arktos v0.8
* Networking: Mizar v0.8
* Edge: Global Scheduler v0.1, Centaurus Edge Design
* AI: Alnair v0.1

### Arktos v0.8 Arktos scale-out architecture can now achieve 50K-node cluster scale along with inherent secure communication support. 

In Arktos v0.8, we continue to improve scalability with the new scale-out architecture introduced in Arktos v0.7. Also, Arktos can now support multiple resource managers where tenants can utilize resources across all the resource managers. Together, Arktos successfully passed the 50K-node density test with maximum 6s start up latency. We will continue to improve the scale and performance of Arktos in future releases. 

In addition to scalability improvements, this release also adds the following enhancements:

  * Performance improvements ported from K8S 1.18
  * Test improvements
  * Critical bug fixes

Please refer to https://github.com/CentaurusInfra/arktos/releases/tag/v0.8 for a full list of features in this release.

### Mizar v0.8 Mizar now enforces Kubernetes network policy with a native label-based implementation. 

In the previous release, Mizar provided full support of Kubernetes network policy. Under the hood, Mizar translates Kubernetes label selections to IP groups to perform policy enforcement. In Mizar v0.8 release, we now support a native label-based enforcement mechanism, which avoids label-IP translation and greatly reduces update cost when label selection changes. In addition, this release also includes network QoS control for different priority pods, major stabilization fixes and single-yaml Mizar deployment for a more user-friendly experience.  

Please refer to https://github.com/CentaurusInfra/mizar/releases/tag/v0.8 for a full list of features in this release. 

### Global Scheduler v0.1 This release brings the design and implementation of all components of the global scheduling platform with performance improvements and validation. 

Global Scheduler is an open source large scale cloud resource orchestration and scheduling platform. It aims to address key scheduling challenges of compute units across a large number of DC clouds and large clouds. In this release, we complete the design and code development of all the components of the global scheduling platform. We also optimize code design/implementation to support 1000 clusters testing scenarios, 100 pods/s QPS, and 100 allocations/s. 

We have incorporated global scheduler work as part of the Edge SIG. Please refer to https://github.com/CentaurusInfra/global-resource-scheduler/releases/tag/v0.1 for a full list of features in this release. 


Additionally, Edge SIG also brings the design of the **Centaurus Edge** backed by proof of concept implementation.  Please visit the design document here https://github.com/pdgetrf/ArktosEdge/blob/main/design/530_design.md.

  * Proof of Concepts: https://github.com/CentaurusInfra/fornax, and key items implemented as POC:
    * Cascading Edge Cluster
    * Worklaod Assignment
    * Worklaod and edge cluster status reporting
    * Support multiple K8S flavors as edge clusters 

### Alnair v0.1 The first release introduces two components: Profiler and Elastic Training Framework.

Alnair aims to build an intelligent platform to improve AI workloads efficiency. AI workloads are very critical for cloud and edge computing. With Centaurus AI SIG, we will focus on the resource management aspects, to analyze and schedule AI workloads on existing/new systems with intelligent methods.

Please refer to https://github.com/CentaurusInfra/alnair/blob/main/CHANGLOG/CHANGELOG-0.1.md for a full list of features in this relaese. 

### Future Outlook

With Centaurus v0.5 release, Centaurus can now achieve higher scalability with better stabilization. This release also brings in a much more friendly user experience and better community contributor experience. The addition of research work from Edge and AI SIGs also highlights more possibilities as we work towards addressing cloud computing challenges in the age of 5G, AI and Edge. A big thanks to our partners and community for their continuous support.
 
For the upcoming releases, the Centaurus community will continue to improve the scale and performance of Centaurus Platform. The Edge SIG will begin implementation of the Centaurus Edge design. The AI SIG will introduce new architecture on how to orchestrate heterogeneous resources and new services model to facilitate AI workloads.  We are excited about the works that are in the plan. We welcome anyone who's interested in tackling cloud challenges to join the community. For more details regarding Centaurus community, please join us here: https://github.com/CentaurusInfra. 

