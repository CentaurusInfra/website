# Arktos v0.7 is live!

**Arktos** is an open source project designed for large scale cloud compute infrastructure. It is evolved from the open source project [Kubernetes](https://github.com/kubernetes/kubernetes) codebase with core design changes. 

Arktos aims to be an open source solution to address key challenges of large-scale clouds, including system scalability, resource efficiency, multitenancy, edge computing, and the native support for the fast-growing modern workloads such as containers and serverless functions. 

### Arktos v0.7: A major improvement on scalability and a brand new scale-out architecture to support tenant partitions

On Feb 5th, the Centaurus community is proud to announce the availability of Arktos v0.7.  

Arktos v0.7 is mostly about scalability improvements.  We introduced the new scale-out architecture, which partitions Arktos control plane to various tenant partitions and resource managers. Please refer to our [design document](https://github.com/CentaurusInfra/arktos/blob/master/docs/design-proposals/arch/arktos_scale_out.md) if you are interested in the details of the new scale-out architecture. In this release we implemented the support multiple tenant partitions and one resource manager. We also improved the existing scale-up design, which helps improve the capacity limit of individual partitions. Combining all these efforts, **Arktos successfully passed the 20K hosts scalability benchmark test.**  We will move to 50K support in the subsequent releases when we have the support for multiple resource managers.

In addition to scalability improvement, this release also adds the following enhancements:

*   Upgrade build/test toolchain and dependent libraries to support Golang 1.13
* Cherry-pick commits from Kubernete to improve performance in cache management, list/watch, node/pod status management, etc. 
* Improve test suite to support multi-tenancy and improve its tracing/logging
* Have some critical bug fixes in PV/PVC, memoryy leak and concurrency bugs in lister/watcher, etc. 

Please refer to https://github.com/CentaurusInfra/arktos/blob/master/CHANGELOG/CHANGELOG-0.7.md for a full list of features in this release. 


### Future Outlook

With v0.7 release, we have improved the scalability of Arktos to the next level. Our next milestone is to support 50K host to go along with multiple resource managers partitions. Additionally, we will also start looking into Edge support and AI related research. A big thanks to our partners and community for their support! As we continue to grow, we would love to have more involvement from the community to be a part of this journey. For more details regarding Arktos and the Centaurus community, please join us here: https://github.com/CentaurusInfra
