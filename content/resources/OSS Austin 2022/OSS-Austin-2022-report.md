---
title: Centaurus @ Open Source Summit 2022
date: "2022-07-11"
category: events
thumbnail: "../../src/images/thumbnails/oss-austin-thumbnails.png"
---

## Open Source Summit 2022

In June, We attended the Open Source Summit 2022 in Austin. It was great to finally being able to build connection face to face. In addition to our sponsor showcase booth, we also have four talks accepted into the event.   Here are the highlights from the event. 

## Our Talks 


**Scale Kubernetes to Manage 60K Nodes Through Architectural Extension - Ying Huang & Ying Xiong, Futurewei Technologies** 

With the increasing adoption of Kubernetes in public and private clouds, large enterprises are looking for solutions that scale a single cluster to tens of thousands of nodes, primarily for simplified operations. In this talk, they will present a mechanism that extends Kubernetes architecture to manage a cluster of 60K nodes. This architectural extension shards Kubernetes cluster into two partitions. One partition, called Tenant Partition, manages customer related objects such as deployments, pods, services, endpoints, etc. The other partition, called Resource Partition, manages non-customer objects such as nodes. They will also present and analyze the performance test results, compare the solution with Kubernetes community version in multiple dimensions. Future works that extend the architecture to manage even larger Kubernetes clusters will also be discussed.

**Kubernetes Network Policy Enforcement in XDP without IP Translation - Hong Chang, Futurewei Technologies, Inc & Xiaoning Ding, ByteDance (Tiktok)**

Network policies in Kubernetes extensively rely on pod labels in order to provide flexible access control rules for network connectivity between pods. However, traditional label->IP translation based approach isn’t efficient enough to support cloud environment needs where pods rapidly come and go. In this talk, Hong and Xiaoning introduce an efficient network policy enforcement mechanism implemented in XDP. In the Linux kernel, eBPF/XDP is a fast-growing technology which enables examining and filtering packets at the NIC driver level. Their proposed solution achieves O(1) time complexity by judiciously making use of various eBPF map hash-tables. They do this by employing a mechanism to label packets using GENEVE options. This eliminates the cost of label->IP translation policy updates because pod packets with identical labels are subject to identical policies regardless of the pod IPs. They conclude the talk with a demo of their work. Cloud providers are looking for ways to increase performance and efficiency. Their work addresses this ask. They are hoping that with more community involvement, there are opportunities to evolve this new idea further and solidify the overall solution by collaboratively working together in the open source community.
 

**Network Traffic Quality of Service (QoS) Classes for Containers & Pods Via EBPF/XDP - Vinay Kulkarni & Phu Tran, Futurewei Technologies** 

Linux cgroups allows us to allocate compute resources such as CPU and memory that is precisely tailored to specific needs of the container application. However, when it comes to network resource management, besides container network bandwidth limiting capability offered by 'bandwidth CNI plugin' for Kubernetes, there isn't a way to specify or enforce differentiated network resource requirements such as traffic class & priority. Time sensitive & low latency pod traffic gets lumped in with low priority and bulk container traffic... until now.

Mizar is an open-source pod networking solution that we developed using eBPF/XDP technology for high performance & architected for the fast provisioning needs of cloud environments.

In this talk, Vinay & Phu discuss how they leveraged Mizar’s XDP-first architecture to build a solution that brings fine-grained network QoS to container network traffic in pods. They show how they uniquely leveraged XDP & Linux Traffic Control (tc) BPF hooks to offer a rich set of network QoS classifications with Earliest Departure Time (EDT) algorithm based traffic rate-limiting implemented in eBPF. Furthermore, they show how to exploit QoS features in data center physical switches & bring end-to-end network QoS to pods. They will conclude with a demo.

**High Performance Secure Container: Quark - Yulin Sun & Ying Xiong, Futurewei**

Quark container is one new secure container runtime as Kata runtime and gVisor. It is a high-performance OCI compatible secure container runtime developed by Rust program language with low memory footprint and startup overhead. It is designed for containerized service execution running in the Data Center and Edge environment. Quark is based on System Call virtualization. Compare with Linux VM based virtualization, it adopts multiple performance improvements such as zero memory copy QCall to avoid Hypercall’s communication overhead between Guest Kernel and Host; Linux host io-uring based IO virtualization. It also support RDMA based container network which transparently execute TCP based containerized application over RDMA to achieve low latency and high throughput. The talk will introduce Quark container architecture together with the secure container design challenge and opportunity.

Videos will be added once they become available. 


## Sponsor Showcase 

We had both physical showcase booth and virtual showcase platform. We were excited to share our latest work and demo on project Arktos and Alnair.   

![Booth photo](images/Booth.PNG)

## Coming Up

We will be at the ONE Summit in Seattle from Nov 15 to Nov 16. Please join us at the booth and the co-located event.  
