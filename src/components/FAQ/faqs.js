const FAQ_LIST = [
  {
    question: "What is Project Centaurus?",
    answer: `
    Centaurus is an open source Distributed Cloud Native Infrastructure umbrella
    project for the 5G, AI, and Edge era. Project Centaurus is an overarching next 
    generation open source cloud platform that encompasses open source projects 
    <a target="__blank" href="https://github.com/centaurus-cloud/arktos">Arktos</a> & 
    <a target="__blank" href="https://github.com/centaurus-cloud/mizar">Mizar</a> as 
    sub-projects underneath it as one fully integrated cloud platform.<br> Centaurus project 
    enables a unified and large-scale distributed cloud infrastructure platform. It is a 
    software layer that abstracts out the underlying hardware infrastructure, making it 
    possible to consistently run and manage applications running in the cloud environment 
    in a seamless manner.<br> Centaurus project currently includes a Compute project 
    (<a target="__blank" href="https://github.com/centaurus-cloud/arktos">Arktos</a>) and 
    a Networking project (<a target="__blank" href="https://github.com/centaurus-cloud/mizar">Mizar</a>). 
    Storage, identity, management, monitoring, security, tools, edge connectivity, and other parts of the 
    Centaurus vision still need to be built out, and we'd like to invite the open source community to join 
    us to complete the Centaurus ecosystem.`,
  },
  {
    question:
      "What is Project Centaurus trying to solve, why build a yet another cloud platform?",
    answer: `
    With innovations in high-performance cloud network solutions, unified runtime environment, 
    and hyper-scale cluster management, Centaurus is designed to meet the infrastructure requirements 
    for the new types of cloud workloads such as 5G, AI, Edge, and IoT applications. Specifically, 
    the Centaurus project is trying to achieve:
    <ul>
      <li>
        Unified infrastructure for managing various cloud resources (such as VMs, containers, 
        serverless, bare-metal machines, and others) natively.
      </li>
      <li>
        High-performance cloud network data plane for extremely low latency network traffic forwarding
        and routing in the cloud.
      </li>
      <li>
        Hyper-scale compute cluster management supports 300K+ hosts in a single regional control plane and 10M+ 
        network endpoint provisioning in a region.
      </li>
      <li>
        Natively support of edge cloud, the cloud extension to manage compute and network resources at 
        edge sites from the cloud.
      </li>
    </ul>
    <br>
    Please see more details in the <a target="__blank" href="https://www.centauruscloud.io/files/Centaurus%20WhitePaper.pdf">white paper</a> 
    on the Centaurus project <a target="__blank" href="https://www.centauruscloud.io">website</a>.`,
  },
  {
    question: "How is Centaurus different from Kubernetes?",
    answer: `
    Kubernetes is a platform for deploying and managing containers. While Kubernetes offers some 
    base functionality on which users can rely upon when running their containerized applications 
    or building their extensions, it does not provide inherent support for the entire cloud platform 
    functionality.<br> Kubernetes does not purport to solve every problem that users may have as part of 
    their overall cloud environment. For example, Kubernetes relies on the underlying cloud infrastructure 
    layers such as IaaS Provisioning & Management (using a clean “cloud provider” interface), Networking 
    (using pluggable CNI interface) etc. etc. Kubernetes typically relies on IaaS Provisioning & Management 
    provided by public cloud provides (AWS, Azure, Google etc.) or using open source OpenStack environment.<br>
    Centaurus cloud platform, on the other hand, is a comprehensive large-scale cloud platform that not only 
    provides support for deploying and managing containerized workloads but also includes inherent comprehensive 
    IaaS Provisioning & Management capabilities in a unified manner. That way, Centaurus platform is self-contained 
    and does not rely on 3rd party IaaS layer underneath it.<br> Although, it is important to highlight that Centaurus 
    projects is highly inspired by the cloud native design principles of Kubernetes project. As a matter of fact, 
    Centaurus/Arktos compute layer project is specifically built upon baseline Kubernetes codebase and enhances the
    underlying Kubernetes core components for enabling a highly scalable & unified cloud computing platform experience. 
    Centaurus/Mizar networking project, on the other hand,  is built from ground-up using XDP eXpress Data Path (XDP) and
    Geneve protocol technology-set and has no relationship to Kubernetes project whatsoever.`,
  },
  {
    question: "How is Centaurus different from OpenStack?",
    answer: `
    As mentioned previously that Centaurus cloud platform is a comprehensive cloud platform that not only provides 
    support for deploying and managing containerized workloads but also includes inherent comprehensive IaaS Provisioning 
    & Management capabilities. From that perspective, Centaurus is somewhat similar to what OpenStack is and provides an 
    option or an alternative to it.<br> However, it is utmost important to highlight that unlike traditional OpenStack like 
    cloud infrastructure platforms, Centaurus is a large-scale distributed cloud infrastructure IaaS+ platform that 
    provides inherent support for next generation distributed applications (such as robotic control or autonomous driving 
    etc., which require actions to be taken quickly in response to a constantly changing environment, highly low latency 
    applications environment). It has a built-in global scheduling capability that supports seamless scheduling of workloads 
    amongst cloud data centers and edge cloud sites.<br>
    Additionally, it important to highlight that Centaurus employs cloud native approach along with a novel cloud networking 
    solution to provide the comprehensive cloud platform functionality. Centaurus addresses some key challenges many open 
    source cloud infrastructure face, cloud scalability at the region level, unified infrastructure and API for 
    VM, containers and other types of resources, and scalability of cloud network etc.<br> OpenStack does provide extensive support 
    for rich cloud Storage as well as other supporting cloud services such as Identity Management etc. As mentioned earlier 
    that we'd like to invite the open source community to join us to enhance & complete the Centaurus ecosystem by building 
    such supporting cloud services provided by either OpenStack or similar services provided by public cloud providers such as AWS, Azure, Google etc.
    `,
  },
  {
    question: "What about cloud storage layer?",
    answer: `
    Storage in Centaurus is pluggable using the <a target="__blank" href="https://github.com/container-storage-interface/spec/blob/master/spec.md">Container Storage</a> 
    Interface (CSI). CSI is a standard for exposing arbitrary block and file storage systems to containerized workloads on Container Orchestration Systems (COs) 
    like Centaurus or Kubernetes. In the case of Centaurus, storage for VMs is volume mounted in the same manner as the containers. As a result, CSI storage interface 
    works seamlessly works for both containers & VMs.
    `,
  },
  {
    question:
      "How is Centaurus project complementary to projects in CNCF, CDF, LF Edge or LF Networking umbrella?",
    answer: `
    Centaurus project is targeted to be launched as an independent project under the Linux Foundation umbrella 
    as it is geared towards solving different sets of challenges or problems than other cloud computing projects 
    in LF. With that being said, we are still looking at potential options and trying to find the best place to 
    donate and host the Centaurus project, which can deliver maximum benefits for the open source communities and 
    the industry.<br> Technically, as you may see, Centaurus has compute, network, and edge components and focuses on 
    a complete IaaS+ platform. In contrast, CNCF focuses on container orchestration, LF Edge focuses on Edge 
    infrastructure, CDF focuses on the CI/CD layer and LF networking specifically on network architecture and solution.<br>
    However, Centaurus is designed with cloud-native architecture, and its components are independent projects that can 
    be used independently with other cloud technologies. Vice versa, we welcome and expect that components from projects 
    in CNCF, LF Edge, and LF Networking and other open source foundations can be plugged into Centaurus as well.
    `,
  },
  {
    question: "How is Project Centaurus related to CNCF KubeEdge project?",
    answer: `
    With rapid deployments of IoT devices and the arrival of 5G wireless, edge computing has become more and more 
    important in the next cloud architecture. By seamlessly integrating with CNCF KubeEdge sister project, Centaurus 
    builds out some core features for extending cloud computing to edge sites and provides a seamless integration 
    between cloud computing and edge computing.
    `,
  },
  {
    question: "What is the release cadence for Centaurus Project?",
    answer: `
    For both projects Arktos & Mizar, we do a new release every 3 months.
    `,
  },
  {
    question:
      "Is there an easy-to-use OpenStack Horizon dashboard like web user interface for managing Compute, Networking & other services within Centaurus cloud platform?",
    answer: `
    Yes, we do have a rudimentary user interface, although not extensive as OpenStack Horizon dashboard. We are hoping that community will help evolve the current user interface as we go along.
    `,
  },
  {
    question:
      "Why not use bare bones Kubernetes along with ecosystem tools such as KubeVirt, Virtlet for enabling support for VMs within Kubernetes?",
    answer: `
    We did not go with the bolt-on approach (using KuberVirt or Virtlet) and instead made core underlying design changes to the community Kubernetes codebase for enabling seamless experience to go along with better performance:
    <ul>
      <li>
        Bolt-on approach such as KubeVirt uses two distinct sets of API objects depending on the workload types (one set for containerized workloads and oner for VMs). This results in undesired disjointed experience. All the workload types (VMs or Containers) in our design use the same standard object interface instead, resulting in a seamless experience for all workload types.
      </li>
      <li>
        Unlike bolt-on approach, we support the complete life-cycle management for VMs for enabling full-fledged IaaS environment using K8S as the underlying architectural layer.
      </li>
      <li>
        In order to realize better overall performance, we chose to re-architect the underlying core components (such as Kubelet etc.) as opposed to a bolt-on proxy approach.
      </li>
      <br>
    Please see more details on <a target="__blank" href="https://github.com/centaurus-cloud/arktos">Arktos</a> github repository.
    `,
  },
  {
    question:
      "How does Centaurus project release stays in sync with Kubernetes?",
    answer: `
    As mentioned earlier that Centaurus projects is highly inspired by the cloud native design principles of Kubernetes project. It is built upon baseline Kubernetes codebase and enhances the underlying Kubernetes core components for enabling a highly scalable & unified cloud computing platform. Centaurus project is forked from Kubernetes release 1.15 with extensive core components changes thereafter.
    <br>
    As the Centaurus codebase has diverged extensively from baseline Kubernetes, we are no longer planning to stay in sync. with the community Kubernetes version. Going forward, if there are any key changes which may benefit Centaurus project, we may cherry-pick those changes into Centaurus/Arktos codebase.`,
  },
  {
    question: "Is Centaurus project a distro of Kubernetes?",
    answer: `
    No, as mentioned previously that Centaurus project is forked from Kubernetes release 1.15 with extensive core components changes thereafter.
    <br>
    As the Centaurus codebase has diverged extensively from baseline Kubernetes, we are longer planning to stay in sync. with the community Kubernetes version.
    `,
  },
  {
    question:
      "As Centaurus project is a fork of Kubernetes project, would I be able to run latest release of open source Kubernetes within Centaurus?",
    answer: `
    This should be possible. A specific community K8S release based Kubernetes cluster could be deployed on top of IaaS Provisioning & Management functionality provided by Centaurus platform.
    `,
  },
  {
    question:
      "How is Arktos Multi-Tenancy related to what is being done within Kubernetes Multi-Tenancy SIG?",
    answer: `
    Arktos enables hard multi-tenancy functionality for seamlessly and securely sharing physical cluster infrastructure across multiple independent organizations/parties. Tenant is a first class citizen in our design and it flows through the entire system. Following are the key design principle for Arktos multi-tenancy functionality:
    <ul>
      <li>Isolation: each tenant has its own resource view without being aware of each other.</li>
      <li>Autonomy: tenant manages its own resources and policies without turning to cluster admins.</li>
      <li>Compatibility: tenants can still use existing APIs and tools.</li>
      <li>Manageability: cluster admins can perform cross-tenant management tasks.</li>
    </ul>
    <br>
    Currently, there are various multi-tenancy approaches being discussed within the Kubernetes multi-tenancy SIG group. None of these approaches are similar to our hard multi-tenancy approach. There have been few ongoing discussions with the SIG members for exploring possible upstreaming of our multi-tenancy implementation in the community version of Kubernetes.
    `,
  },
  {
    question:
      "Can I run Arktos Compute with other Cloud Networking solutions besides Mizar Networking?",
    answer: `Currently, Arktos compute layer is fully integrated with Mizar cloud networking out of the box. However, Arktos can seamlessly integrate with any other cloud networking solution besides Mizar networking.`,
  },
  {
    question: "What is Mizar Networking?",
    answer: `
    Mizar is an open-source high-performance cloud-network powered by eXpress Data Path (XDP) and Geneve protocol for highly scalable cloud environment. Mizar is a software defined virtual cloud networking that uses encapsulation technique to securely isolate tenants using a built-in multitenant environment. It is controlled programmatically using a set of well-defined API set. It is a simple and efficient solution that lets you create a multi-tenant overlay network of a massive number of endpoints with extensible network functions:
    <ul>
      <li>Supports provisioning and management of large number endpoints (300K hosts, 10M endpoints).</li>
      <li>Accelerates network resource provisioning for dynamic cloud environments.</li>
      <li>Achieves high network throughput and low latency.</li>
      <li>Unifies the network data-plane for containers, serverless functions, virtual machines, etc.</li>
      <li>Creates an extensible cloud-network of pluggable network functions.</li>
    </ul>
    <br>
    Mizar's data-plane is built from ground-up on top of XDP. Mizar's main building block is an XDP program that runs on each host. The XDP program implements virtual functions including overlay switching, routing, virtual endpoints, load-balancing, NAT, etc. By running multiple instances of XDP programs per tenant network (VPC or Subnet), Mizar data plane provides high performance and extensible packet processing pipeline and functions that achieve Mizar's functional, scale, and performance goals.
    <br>
    Mizar's management-plane programs the data-plane by translating typical networking related APIs and resources to Mizar specific configuration. The
    programmability of the data-plane involves loading and unloading network functions at various stages of the packet processing pipeline.
    <br>
    Please see more details on <a target="__blank" href="https://github.com/centaurus-cloud/mizar">Mizar</a> github repository.
    `,
  },
  {
    question: "Why build a yet another cloud networking platform?",
    answer: `
    Traditional network virtualization technologies (OVS/Neutron etc.) enable virtual cloud networking by mimicking the age old traditional networking design constructs such as MAC address learning, reliance on flooding etc. Virtual Switches are essentially softwareization of hardware switches and routers, but not necessarily programmable in order to provide support for rapid network changes. Additionally, packets in a traditional networking environment (such as OVS) have to typically traverse multiple network stacks on the same host. <br>
    <br>
    Current cloud networking solutions (such as OpenVSwitch-OVS ) program every host every time a user provision an endpoint. Such a networking architecture is highly constrained and not scalable and non-conducive to coping up with the contemporary extremely large scale dynamic workloads (to the order of billions of network packets a day). Such an environment was fine previously when the workloads were quite static and not in large numbers (typical Virtual Machine based static cloud environment).
    <br>
    With all of this as a background, current cloud networking technology solutions are not designed for unified networking for containers, serverless functions, virtual machines, etc. These solutions do not meet the scaling goals of highly scalable public cloud like environment. <br>
    <br>
    To address all these challenges, we built Mizar networking from ground up for efficiently routing traffic for virtual networks and provide support for rapid provisioning of new endpoints. Mizar is built as a fault tolerant distributed system for enabling virtual cloud networking functionality as well as building add-on stateful network services on top of it. Mizar also enables a flexible declarative environment for chaining various add-on network services in accordance to the business workflow requirements.
    <br>
    As part of the VPC traffic routing process, at the heart of Mizar is a core distributed state management layer that handles mappings for forwarding tenant specific network packets to the destination IP and physical destination host address. Mizar manages enormous stateful connection loads, at scale, with high availability. This functionality is currently being built out.
    `,
  },
  {
    question: "Is Mizar Networking same as OpenStack Neutron?",
    answer: `
    Neutron is an OpenStack project to provide "networking as a service" between interface devices (e.g., vNICs) managed by other Openstack services (e.g., nova). It is essentially a network control plane functionality that programs the underlying data-plane technologies (such as OVS etc.) for enabling cloud network virtualization environment. <br>
    <br>
    As an apple-to-apple comparison, Neutron is very similar to Mizar's management-plane functionality described earlier.
    `,
  },
  {
    question: "Can Mizar co-exist with OpenStack Neutron?",
    answer: `
    Currently, out-of-the-box Mizar management-plane is fully integrated with the Mizar data-plane/forwarding-plane functionality. However, Mizar data-plane can be easily integrated with OpenStack Neutron control plane (or for that matter, with any other network control plane) using a set of well-defined published APIs provided by Mizar for translating network resource requirements to Mizar specific network configuration.
    `,
  },
  {
    question: "Is Mizar Networking same as OpenVSwitch (OVS)?",
    answer: `
    Both Mizar & OpenVSwitch are packet forwarding data-plane technologies. OpenVSwitch relies on OpenFlow flow rules. Mizar, on the other hand, is built as a fault tolerant distributed system for enabling virtual cloud networking functionality as well as building add-on stateful network services on top of it. Mizar does not use OpenFlow flow rules at all.
    `,
  },
  {
    question: "Can Mizar co-exist with OpenVSwitch (OVS)?",
    answer: `
    It is possible for these two data-plane technologies to co-exist. We have had preliminary discussions on this regarding possibility of a “Mizar Gateway” like component as a mediation layer in order to route packets for endpoints spanning across these two data-plane technologies.
    `,
  },
  {
    question: "Is Mizar a Data-Plane or a Control-Plane functionality or both?",
    answer: `
    As mentioned earlier that Mizar includes fully integrated network data-plane as well as control-plane functionality.
    `,
  },
  {
    question:
      "Does Mizar networking Data-Plane comes bundled in with its own Control Plane?",
    answer: `
    Yes, it does. However, Mizar data-plane can be easily integrated with OpenStack Neutron control plane (or for that matter, with any other network control plane) using a set of well-defined published APIs provided by Mizar for translating network resource requirements to Mizar specific network configuration.
    `,
  },
  {
    question:
      "Can Mizar networking Data-Plane work with other control planes instead of its built in Control Plane?",
    answer: `
    Mizar data-plane can be easily integrated with any other network control plane technology using a set of well defined published APIs provided by Mizar for translating network resource requirements to Mizar specific network configuration.
    `,
  },
  {
    question: "How is Mizar Networking different than User-Space DPDK?",
    answer: `
    In the networking world a “Forwarding plane” is the underlying technology that processes the networking Packets. There are various flavors of forwarding planes such as DPDK, XDP, OVS, FPGA, ASIC etc.<br>
    <br>
    DPDK stands for Data Plane Development Kit. By default Linux uses kernel networking stack to process packets, this puts pressure on kernel to process packets faster as the NICs (Network Interface Card) speeds are increasing faster and faster. There have been many techniques to bypass kernel to achieve packet efficiency. This involves processing packets in the userspace instead of kernel space. DPDK is one such technology.<br>
    <br>
    Unlike DPDK based solutions, Mizar packet processing is entirely in-kernel without giving up the network interface control to the DPDK library. Mizar makes the best use of kernel packet processing constructs without being locked-in to a specific processor architecture. As mentioned earlier that Mizar data plane is built on top of XDP forwarding plane technology-set. This is an architectural choice given a longer term value of having Mizar’s networking layer as close to the hardware as possible and not as a user-space application.<br>
    <br>
    There is a good talk by David Millar on XDP few years ago (“XDP is not DPDK” and “DPDK is not Linux” - https://youtu.be/NlMQ0i09HMU?t=539). Gist of the talk is the following:
    <ul>
      <li>DPDK is not Linux, it entirely bypasses Linux stack instead of working in concert with it. Once you use DPDK, none of the Linux networking stack capabilities are available to you at all.</li>
      <li>DPDK require 3rd party modules and licensing.</li?
      <li>Defines its own security model for user-space accessing networking hardware, outside the kernel realm.</li>
      <li>XDP, on the other hand, provides you all that without all of these side effects.</li>
    </ul?
    `,
  },
  {
    question: "Does Mizar Networking support SmartNIC offloading?",
    answer: `
    Mizar networking does support SmartNIC offloading as the underlying eBPF/XDP programs are capable of being easily offloaded to SmartNICs.
    `,
  },
  {
    question: "How does Mizar Networking related to SR-IOV?",
    answer: `
    Like DPDK, SR-IOV is yet another technology for optimizing networking packet processing. SR-IOV stands for “Single Root I/O Virtualization”. This takes the performance of the compute hardware to the next level by avoiding hypervisor (unlike OVS) altogether and have VNF (user space applications) access NIC directly, thus enabling almost line rate throughput.<br>
    <br>
    SR-IOV capability which makes one physical device appear as multiple virtual devices can potentially co-exist with XDP. Please see relevant link https://github.com/xdp-project/net-next/blob/master/Documentation/PCI/pci-iov-howto.rst for ongoing work to this regards.
    `,
  },
  {
    question:
      "Can I run Mizar Cloud Networking as independent service without Arktos?",
    answer: `
    Currently, Mizar cloud networking layer is fully integrated with Arktos compute layer out of the box. However, Mizar can seamlessly integrate with any other cloud compute solution besides Arktos (for example: Mesos, OpenStack, Kubernetes etc.).
    `,
  },
  {
    question:
      "Does Mizar Networking work with Network Service Mesh (NSM) & Istio Service Mesh?",
    answer: `
    Definitely, it can. Mizar is a new generation cloud networking data plane technology-set. It should seamlessly work with Service Mesh such as Istio as well as Network Service Mesh (NSM) technology solution. We have not done this integration yet. We would definitely like community to take this work on and we would be very glad to brainstorm and help out the integration effort.
    `,
  },
  {
    question:
      "Does Mizar Networking provide support for building stateful network services?",
    answer: `
    Support for building stateful network services is currently in progress. We are currently working towards design for a separate connection tracking layer to go along with the stateless forwarding layer. This is so that we have these two packet processing layers scale and fail independently from each other. The connection tracking layer is an in-network key-value
    store that implements a Distributed Flow Table (DFT). We would like to invite the open source community to join us in order to collaboratively complete this very important functionality.
    `,
  },
];

export default FAQ_LIST;
