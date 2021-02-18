# Mizar v0.7 is live!

**Mizar** is a large scale and high-performance cloud networking solution for running various cloud workloads such as virtual machines, containers, and other compute workloads. Compared to traditional flow-based programming models, Mizar offers flexible in-network processing that simplifies the programming of data-plane at scale. Unlike traditional networking solutions, Mizar relies on the natural partitioning of a cloud network.

We built Mizar from ground-up on top of [XDP](https://prototype-kernel.readthedocs.io/en/latest/networking/XDP/). Mizar's main building block is a XDP program that runs on each host. The program implements virtual functions including overlay switching, routing, virtual endpoints, load-balancing, NAT, etc.

### Mizar v0.7: Mizar now supports Kubernetes Network Policy

On Feb 2nd, the Centaurus community is proud to announce the availability of Mizar v0.7. In this release, the major enhancement we added is to provide support for [Kubernetes network policy](https://kubernetes.io/docs/concepts/services-networking/network-policies/).  Kubernetes network policy has been widely used in cloud native container world.  Supporting network policy is a big step in Mizar, in addition to the existing virtual network support. 

Below is a list of our component changes in support of enabling network policy functionality:

* Added operators to list/watch network policy objects, pod objects and namespace objects.
* Updated operator logics to calculate eBPF map entries for the CRUD events of above objects.
* Updated Mizar daemon to receive eBPF map entry changes and update maps.
* Added eBPF maps to support O(1) policy enforcement, including maps for policies, CIDRs, excepted CIDRs, etc.
* Updated Mizar transit XDP to enforce ingress rules.
* Updated Mizar transit agent to enforce egress rules.
* Added connection tracking module on XDP layer.

This release also includes some other functionality enhancements such as supporting configurable network interfaces, contributed by the newly joined community member Click2Cloud.
 
Please refer to https://github.com/CentaurusInfra/mizar/releases/tag/v0.7 for a full list of features in this release. 

### Future Outlook

Going forward, we will continue to add more features in Mizar, including 
optimizing network policy implementation with a tag-based mechanism. We will also be looking into various perfromance optimization aspects of cloud networking such as hardware offloading etc. We thank all the community members for contributing to this release, and we welcome more to join our ongoing effort. For more details regarding Mizar and the Centaurus community, please join us here: https://github.com/CentaurusInfra. 

