---
title: "Centaurus v0.6 is live!"
author: "Mengni Zhang"
date: "2021-11-16"
---


The **Centaurus** Infrastructure Project is a cloud infrastructure platform for building distributed cloud and a platform for modern cloud native computing. It supports applications and workloads for 5G, Edge, and AI and unifies the orchestration, network provisioning and management of cloud compute and network resources at a regional scale.

## Centaurus v0.6 Release

On Oct 4th, the Centaurus community is excited to announce the availability of Centaurus v0.6. In this release, we are introducing work from all the Centaurus SIGs: 
* Scalability: Arktos v0.9 https://github.com/CentaurusInfra/arktos/releases/tag/v0.9
* Networking: Mizar v0.9 https://github.com/CentaurusInfra/Mizar/releases/tag/v0.9
* Edge: Fornax v0.2 https://github.com/CentaurusInfra/fornax/releases/tag/v0.2
* AI Platform: Alnair v0.2 https://github.com/CentaurusInfra/alnair/releases/tag/v0.2

### Arktos v0.9 Arktos now supports a 50,000 node cluster scale with a 60% reduction in management cost. ###

In Arktos v0.9, we focused our work on doubling the throughput of a large Arktos scale-out cluster, minimizing management cost, and enabling service support. 

Highlights from Arktos v0.9 release:
* Arktos now supports 50,000 nodes in a cluster with only two tenant partitions and two resource partitions.  
* Arktos has doubled its system throughput with optimizations in API Server, Controller Manager, and Kubelet.
* Customers can now create and deploy services and associate pods with the service in Arktos. 

Please refer to https://github.com/CentaurusInfra/arktos/releases/tag/v0.9 for a complete list of features in this release.

### Mizar v0.9 now added the ability for users to specify traffic class and priority for the network traffic of their workloads, which brings Network Quality of Service (QoS) to Pods.

Highlights from Mizar v0.9 release:
* Mizar allows users to create VPCs, Subnet, and assign Pods to specific VPC/Subnet. 
* We implemented Mizar CNI binary in Go.
* With the help from the Click2Cloud team, made progress towards Mizar-Arktos integration and enabled the deployment of Mizar on Ubuntu 20.04 and the latest Ubuntu 21.04 versions of Linux. 

Please refer to https://github.com/CentaurusInfra/mizar/releases/tag/v0.9 for a complete list of features in this release. 

### Fornax released the first version of Centaurus Edge on Sept 1st and followed with enhancement work to improve edge application deployment and edge to edge communication in the v0.2 release. 

During the v0.1 release, Fornax shared the initial design of the Centaurus edge landscape and a solid implementation that supports the fundamental edge cluster scenarios. You may find the detailed design [here](https://github.com/CentaurusInfra/fornax/blob/main/docs/fornax-design/530_design.md).

 With the v0.2 release, Fornax focused on enhancing the Mission CRD to improve edge application deployment and POC prototyping for the key components of edge networking. 

Please refer to https://github.com/CentaurusInfra/fornax/releases for a complete list of features from v0.1 and v0.2 releases. 

### Alnair v0.2 release includes improvements on Profiler and Elastic Framework and new components：Autonomous Scheduler and Alnair Device Plugin. 

Highlights from Alnair v0.2 release:

* Profiler (Improvement)
    * Pod-level metrics, disk io, and network utilization are collected every second. 
    * GPU utilization resolution is improved from node level to pod level. 
* Elastic Training Framework (Improvements)
    * Single YAML deployment and unit/integration tests. 
* Autonomous Scheduler (New)
    * A utilization-driven scheduler 
    * Co-scheduling feature: to ensure the atomicity of a group of pods being scheduled together. 
* Alnair Device Plugin (New)
    * Kubernetes Device Plugin for Nvidia GPUs

Please refer to https://github.com/CentaurusInfra/alnair/releases/tag/v0.2 for a complete list of features. 

### Future outlook

Centaurus v0.6 release presented exciting new components and improvements that will open doors for more possibilities and collaboration opportunities to build the next generation distributed cloud infrastructure. A huge thanks to our partners and community for their continuous support.  

For the upcoming release targeted for Jan 31st, the Centaurus community will focus on Arktos and Mizar integration. In addition, the Edge and AI SIGs will continue to share enhancements on existing works and novel insights/ideas we discover along the journey.  We are excited about the works that are in the plan. We welcome anyone interested in tackling cloud challenges to join the community. For more details regarding the Centaurus community, please join us here: https://github.com/CentaurusInfra.





