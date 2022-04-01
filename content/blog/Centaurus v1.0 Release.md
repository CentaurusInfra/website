---
title: "Centaurus v1.0 is live!"
author: "Mengni Zhang, Ying Huang, Vinay Kulkarni"
date: "2022-03-15"
---


The **Centaurus** Infrastructure Project is a cloud infrastructure platform for building distributed cloud and a platform for modern cloud native computing. It supports applications and workloads for 5G, Edge, and AI and unifies the orchestration, network provisioning and management of cloud compute and network resources at a regional scale.

## Centaurus v1.0 Release

On March 15, the Centaurus community is excited to announce the availability of Centaurus v0.7. In this release, we are introducing the integration work from Arktos and Mizar projects.  
* Arktos v1.0 https://github.com/CentaurusInfra/arktos/releases/tag/v1.0
* Mizar v0.91 https://github.com/CentaurusInfra/mizar/releases/tag/v0.91


### Arktos is now a truly multi-tenancy platform. 

In Arktos v1.0 release, we focused our work on integrating Arktos with Mizar networking solution. This enables Arktos to be a truly multi-tenant platform through adopting Mizar network solution including CNI plugin and VPC/Subnet support. This release also supports selected OpenStack API for VM management in Arktos. In addition, users can now deploy scale out architecture with one single command line through our cluster initialization tool. 


Highlights from Arktos v1.0 release:
* Integrated network solution for multi-tenancy cluster (requires Ubuntu 1804 and up)
* Cluster initialization tool to support scale out architecture in admin cluster
* Arktos API extension to support selected OpenStack APIs

Please refer to https://github.com/CentaurusInfra/arktos/releases/tag/v1.0 for a complete list of features in this release.

### Mizar v0.91 release makes multi-tenancy networking possible for pod networking solution. 

This release brings integration of Mizar pod networking solution with Arktos project. There is no existing pod networking solution that supports multi-tenancy networking. This release of Mizar project fills the gap. 

Highlights from Mizar v0.91 release:
* Support Mizar multi-tenancy networking deployment. 
* Implement gRPC server mode in Mizar node agent.
* Implement gRPC server mode of operation in Mizar operator. 
* Support the creation of multiple VPC objects. 
* Co-locate Mizar operator with tenant API server for simplicity, performance, and efficiency.

Please refer to https://github.com/CentaurusInfra/mizar/releases/tag/v0.91 for a complete list of features in this release. 


### About Arktos scale out architecture
Arktos [scale out architecture ](https://github.com/CentaurusInfra/arktos/blob/master/docs/design-proposals/arch/arktos_scale_out.md) is designed to support a highly scalable and highly available regional control plane for cloud compute service. More specifically, it allows for deployment of multiple cluster-master instances (called tenant partitions) where each master instance has its own set of ETCD, API server, scheduler, and controllers (except node controller). Each tenant partition can support multiple tenant users. And each tenant partition master has a global view of worker nodes across multiple resource partitions. 

Resource partition also functions as its own cluster with a master that runs ETCD, API server, and node controller.  It's designed to focus mainly on worker node resource management in that cluster. In this way, Arktos scale out deployments allows for scaling the number of nodes available for pod deployment across multiple resource partitions. 

### Future outlook

Centaurus v1.0 release marked a great step forward for the Centaurus community. This is a very exciting milestone where we integrated two very complex systems together. This 
 enhancement feature will open doors for more possibilities and collaboration opportunities for both the project itself and the Centaurus community. A huge thanks to contributors of Arktos and Mizar projects, our partners and the community for their continuous support.  

For upcoming releases, the Centaurus community will highlights work from the Edge and AI SIGs. We will continue to share enhancements on existing works and novel insights/ideas we discover along the journey.  We are excited about the works that are in the plan. We welcome anyone interested in tackling cloud challenges to join the community. For more details regarding the Centaurus community, please join us here: https://github.com/CentaurusInfra.





