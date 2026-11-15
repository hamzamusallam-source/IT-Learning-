/* Generated search index: one entry per topic, with its text. */
const SEARCH = [
{
"t": "Hardware & Components",
"p": "IT Fundamentals & Infrastructure",
"h": "it-fundamentals.html#hardware-and-components",
"x": "Every computer, from a laptop to a data-center server, is built from the same core parts. Knowing what each one does makes upgrades and fault-finding far easier. CPU: executes instructions; cores and clock speed set its capacity. RAM: fast, temporary working memory, cleared on power-off. Storage: HDDs and SSDs keep data permanently. Motherboard, power supply and network card connect everything together."
},
{
"t": "Operating Systems",
"p": "IT Fundamentals & Infrastructure",
"h": "it-fundamentals.html#operating-systems",
"x": "The operating system sits between the hardware and the applications. It manages memory, processes, files, devices and users. Desktop and server editions of Windows and Linux. Processes, services and scheduling. File systems, permissions and user accounts. Updates and patching as a routine, not an emergency."
},
{
"t": "Server Administration",
"p": "IT Fundamentals & Infrastructure",
"h": "it-fundamentals.html#server-administration",
"x": "A server provides a service to many users at once — files, email, websites, databases. Administering it means keeping it available, secure and up to date. Installing and hardening a server. Managing roles, services and scheduled tasks. Monitoring CPU, memory, disk and logs. Documenting every change you make."
},
{
"t": "Directory Services",
"p": "IT Fundamentals & Infrastructure",
"h": "it-fundamentals.html#directory-services",
"x": "A directory service is the central list of users, computers and groups in an organisation, and the rules that apply to them. Single sign-on: one account for many systems. Groups and policies to apply settings at scale. Domain controllers and replication. Joining computers and users to the domain."
},
{
"t": "Virtualization",
"p": "IT Fundamentals & Infrastructure",
"h": "it-fundamentals.html#virtualization",
"x": "Virtualization runs many virtual machines on one physical server. A hypervisor shares the hardware between them while keeping each one isolated. Type 1 hypervisors run directly on the hardware — the norm in data centers. Snapshots, cloning and templates speed up delivery. Live migration moves running VMs between hosts. Containers are a lighter alternative for applications."
},
{
"t": "Storage (SAN / NAS)",
"p": "IT Fundamentals & Infrastructure",
"h": "it-fundamentals.html#storage-san-nas",
"x": "Enterprise storage is shared over the network instead of living inside each server. NAS shares files over the network (SMB, NFS). SAN provides block storage over a dedicated network (Fibre Channel, iSCSI). RAID protects against disk failure — it is not a backup. Tiering puts hot data on fast disks and cold data on cheap ones."
},
{
"t": "Data Center Basics",
"p": "IT Fundamentals & Infrastructure",
"h": "it-fundamentals.html#data-center-basics",
"x": "A data center is the physical home of servers, storage and network equipment. Its design is about keeping that equipment powered, cool and secure. Redundant power: UPS units and generators. Cooling and hot/cold aisle layout. Racks, cabling and labelling standards. Physical access control and monitoring."
},
{
"t": "Troubleshooting",
"p": "IT Fundamentals & Infrastructure",
"h": "it-fundamentals.html#troubleshooting",
"x": "Good troubleshooting is a method, not luck. Work from symptoms to cause one step at a time. Define the problem and when it started. Gather information: logs, recent changes, who is affected. Form a hypothesis, test it, change one thing at a time. Fix, verify, then document what you learned."
},
{
"t": "OSI & TCP/IP",
"p": "Networking & Connectivity",
"h": "networking.html#osi-and-tcp-ip",
"x": "Network models split communication into layers so each problem can be understood on its own. OSI: 7 layers — Physical, Data Link, Network, Transport, Session, Presentation, Application. TCP/IP: the 4-layer model the internet actually uses. TCP is reliable and ordered; UDP is fast and lightweight. Troubleshoot bottom-up: cable first, application last."
},
{
"t": "IP Addressing & Subnetting",
"p": "Networking & Connectivity",
"h": "networking.html#ip-addressing-and-subnetting",
"x": "Every device needs an IP address. Subnetting divides a network into smaller, manageable pieces. IPv4 is 32 bits (e.g. 192.168.1.10); IPv6 is 128 bits. The subnet mask (or /24 prefix) separates network and host parts. Private ranges: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16. NAT lets many private devices share one public address."
},
{
"t": "Switching & VLANs",
"p": "Networking & Connectivity",
"h": "networking.html#switching-and-vlans",
"x": "Switches connect devices inside the same network and forward frames using MAC addresses. Switches learn which MAC address sits on which port. VLANs split one physical switch into separate logical networks. Trunk links carry several VLANs between switches. Spanning Tree prevents loops in redundant designs."
},
{
"t": "Routing",
"p": "Networking & Connectivity",
"h": "networking.html#routing",
"x": "Routers connect different networks and choose the path each packet should take. The routing table lists known networks and next hops. Static routes are set by hand; dynamic routes are learned. OSPF is common inside organisations; BGP runs the internet. The default gateway is where a device sends unknown traffic."
},
{
"t": "DNS & DHCP",
"p": "Networking & Connectivity",
"h": "networking.html#dns-and-dhcp",
"x": "Two quiet services that every network depends on. DNS turns names (example.com) into IP addresses. Record types: A, AAAA, CNAME, MX, TXT. DHCP hands out IP addresses, gateways and DNS settings automatically. When “the internet is down”, check DNS early."
},
{
"t": "Wireless",
"p": "Networking & Connectivity",
"h": "networking.html#wireless",
"x": "Wi-Fi brings the network to devices without cables, at the cost of shared airtime and more security exposure. Standards such as Wi-Fi 6 and 6E, and the 2.4, 5 and 6 GHz bands. Channel planning to reduce interference. WPA3 and enterprise authentication (802.1X). Controllers to manage many access points centrally."
},
{
"t": "WAN & SD-WAN",
"p": "Networking & Connectivity",
"h": "networking.html#wan-and-sd-wan",
"x": "A WAN connects sites that are far apart — branches, data centers and the cloud. Traditional links: MPLS, leased lines, VPNs over the internet. SD-WAN steers traffic across several links by application and quality. Central policy instead of configuring each router by hand. Lower cost and faster rollout for new branches."
},
{
"t": "Network Monitoring",
"p": "Networking & Connectivity",
"h": "networking.html#network-monitoring",
"x": "You can't fix what you can't see. Monitoring shows health, capacity and problems before users report them. Availability checks and alerting. SNMP and flow data for traffic and bandwidth. Syslog for device events. Baselines so you know what “normal” looks like."
},
{
"t": "Security Fundamentals",
"p": "Cybersecurity",
"h": "cybersecurity.html#security-fundamentals",
"x": "Security starts with a few ideas that apply everywhere. CIA triad: Confidentiality, Integrity, Availability. Threat, vulnerability and risk are different things. Defence in depth: several layers, never one wall. Least privilege: give only the access that is needed."
},
{
"t": "Network Security",
"p": "Cybersecurity",
"h": "cybersecurity.html#network-security",
"x": "Controlling what can reach what, and spotting traffic that shouldn't be there. Firewalls and next-generation firewalls. Segmentation to limit how far an attacker can move. IDS / IPS to detect and block known attacks. Secure remote access with VPN or ZTNA."
},
{
"t": "Identity & Access (IAM)",
"p": "Cybersecurity",
"h": "cybersecurity.html#identity-and-access-iam",
"x": "Most breaches start with a stolen or misused identity, so identity is the new perimeter. Authentication (who you are) vs authorization (what you can do). Multi-factor authentication for every user. Privileged access management for admin accounts. Joiner, mover, leaver processes to keep access clean."
},
{
"t": "Endpoint Security",
"p": "Cybersecurity",
"h": "cybersecurity.html#endpoint-security",
"x": "Laptops, servers and phones are where attacks usually land. EDR tools that detect and respond, not just antivirus. Patching and secure configuration baselines. Disk encryption and device management. Application control to block unknown software."
},
{
"t": "Zero Trust",
"p": "Cybersecurity",
"h": "cybersecurity.html#zero-trust",
"x": "Zero Trust means never assuming trust because of network location. Every request is verified. Verify explicitly: identity, device health, context. Least-privilege access, granted just in time. Assume breach: segment and monitor everything. A journey of many small steps, not a single product."
},
{
"t": "SOC & SIEM",
"p": "Cybersecurity",
"h": "cybersecurity.html#soc-and-siem",
"x": "The Security Operations Center watches the organisation around the clock. The SIEM is its central tool. SIEM collects and correlates logs from many sources. Use cases and alert rules mapped to MITRE ATT&CK. Analyst tiers: triage, investigation, threat hunting. SOAR automates repetitive response steps."
},
{
"t": "Threat Intelligence",
"p": "Cybersecurity",
"h": "cybersecurity.html#threat-intelligence",
"x": "Knowing who is likely to attack, how, and with what — so defences focus on real threats. Indicators of compromise: IPs, domains, file hashes. Tactics, techniques and procedures (TTPs). Strategic, operational and tactical intelligence. Sharing with trusted communities and sector CERTs."
},
{
"t": "Incident Response",
"p": "Cybersecurity",
"h": "cybersecurity.html#incident-response",
"x": "A calm, rehearsed process for when an attack happens. Prepare — plans, contacts, tools. Detect & analyse — confirm and scope the incident. Contain, eradicate, recover — stop the spread, clean up, restore. Lessons learned — improve so it doesn't happen again."
},
{
"t": "Ethical Hacking",
"p": "Cybersecurity",
"h": "cybersecurity.html#ethical-hacking",
"x": "Testing systems the way an attacker would — with permission — to find weaknesses first. Phases: reconnaissance, scanning, exploitation, reporting. Vulnerability assessment vs penetration testing. Clear scope and written authorisation, always. The report and fixes matter more than the exploit."
},
{
"t": "Security Awareness",
"p": "Cybersecurity",
"h": "cybersecurity.html#security-awareness",
"x": "People are both the biggest risk and the strongest defence. Recognising phishing and social engineering. Strong passwords and password managers. Reporting suspicious activity quickly, without blame. Short, regular training beats one long annual session."
},
{
"t": "Cloud Fundamentals",
"p": "Cloud Computing",
"h": "cloud-computing.html#cloud-fundamentals",
"x": "Cloud computing means renting computing resources — servers, storage, databases, networks, software — over the internet, paying for what you use instead of buying and running the hardware yourself. On-demand: resources are created in minutes, not ordered and installed over weeks. Elastic: capacity grows and shrinks with demand. Pay-as-you-go: spending moves from capital expense (CapEx) to operating expense (OpEx). Global: providers run regions and availability zones around the world. Shared responsibility: the provider secures the cloud itself; you secure what you put in it — data, identities, configuration."
},
{
"t": "IaaS / PaaS / SaaS",
"p": "Cloud Computing",
"h": "cloud-computing.html#iaas-paas-saas",
"x": "The service model decides how much the provider manages and how much stays with you. Model You manage Example use IaaS OS, runtime, apps, data Virtual machines, block storage PaaS Your app and data Managed databases, app hosting SaaS Users and settings only Email, office suites, CRM"
},
{
"t": "Hybrid Cloud",
"p": "Cloud Computing",
"h": "cloud-computing.html#hybrid-cloud",
"x": "Hybrid cloud connects an organisation's own data center with a public cloud so they work as one environment. It suits workloads that must stay on-premises for regulation or latency, while others move out. Private connectivity (VPN or dedicated links) between sites. One identity system across both sides. Consistent management, monitoring and policy."
},
{
"t": "Multi-Cloud",
"p": "Cloud Computing",
"h": "cloud-computing.html#multi-cloud",
"x": "Multi-cloud means using more than one public cloud provider — by design, to pick the best service for each job or reduce dependence on one vendor, or by accident, after mergers and team choices. Multi-cloud adds flexibility but also complexity: more skills, more consoles, and more places for security gaps. Have a clear reason before adopting it."
},
{
"t": "Cloud Networking",
"p": "Cloud Computing",
"h": "cloud-computing.html#cloud-networking",
"x": "Every cloud gives you a private, software-defined network to place resources in. The concepts are the same everywhere, even when the names differ. Virtual network: your isolated address space, divided into subnets. Security rules: stateful filters on what can talk to what. Load balancers and gateways: how traffic enters and leaves. Peering and private links: connecting networks without the public internet."
},
{
"t": "Cloud Security",
"p": "Cloud Computing",
"h": "cloud-computing.html#cloud-security",
"x": "Most cloud incidents come from misconfiguration and weak identity, not from the provider being breached. Least-privilege access and multi-factor authentication for every account. Encryption for data at rest and in transit, with managed keys. Logging and posture management to catch risky settings early. No storage buckets or databases exposed to the internet by default."
},
{
"t": "FinOps",
"p": "Cloud Computing",
"h": "cloud-computing.html#finops",
"x": "FinOps is the practice of making cloud spending visible, owned and optimised — bringing finance, engineering and management into the same conversation. Inform: tag resources and show each team what it spends. Optimise: right-size, switch off idle resources, use commitments and discounts. Operate: budgets, alerts and regular reviews."
},
{
"t": "Cloud DR",
"p": "Cloud Computing",
"h": "cloud-computing.html#cloud-dr",
"x": "Disaster recovery in the cloud uses other zones or regions as the backup site. The right pattern depends on how much downtime (RTO) and data loss (RPO) the business can accept. Pattern Cost Recovery speed Backup & restore Lowest Hours Pilot light Low Tens of minutes Warm standby Medium Minutes Active-active Highest Near zero"
},
{
"t": "Cloud platforms",
"p": "Cloud Computing",
"h": "cloud-computing.html#platforms",
"x": "Once the concepts are clear, choose a platform and go deeper. Each one implements the same ideas with its own names and services. Microsoft Azure Strong in hybrid setups and Microsoft-centric organisations. Amazon Web Services The broadest catalogue of services and the largest market share. Oracle Cloud (OCI) A natural home for Oracle Database and Oracle applications. Huawei Cloud Growing presence in the Middle East, Africa and Asia. Alibaba Cloud The leading provider in China, expanding across the region."
},
{
"t": "AI Fundamentals",
"p": "Artificial Intelligence",
"h": "artificial-intelligence.html#ai-fundamentals",
"x": "Artificial Intelligence is the field of building systems that perform tasks that normally need human intelligence: understanding language, recognising images, predicting outcomes and making decisions. AI is the broad goal; machine learning is the main way we achieve it today. Narrow AI does one task well — all AI in use today is narrow. General AI (AGI) — human-level ability across tasks — is still theoretical. Good data matters more than clever algorithms."
},
{
"t": "Machine Learning",
"p": "Artificial Intelligence",
"h": "artificial-intelligence.html#machine-learning",
"x": "Machine learning systems learn patterns from data instead of following hand-written rules. Supervised: learn from labelled examples (spam / not spam). Unsupervised: find structure in unlabelled data (customer groups). Reinforcement: learn by trial, reward and penalty. Split data into training and test sets to measure real accuracy."
},
{
"t": "Generative AI",
"p": "Artificial Intelligence",
"h": "artificial-intelligence.html#generative-ai",
"x": "Generative AI creates new content — text, images, code, audio — rather than only classifying or predicting. Built on deep neural networks trained on very large datasets. Use cases: drafting, summarising, coding help, search, design. Outputs can be confident and wrong, so review them. Data privacy and intellectual property need clear policies."
},
{
"t": "LLMs",
"p": "Artificial Intelligence",
"h": "artificial-intelligence.html#llms",
"x": "Large Language Models predict the next piece of text, one token at a time. At scale, this produces surprisingly capable assistants. Text is split into tokens; the context window limits how much fits. Pre-training on broad text, then fine-tuning for behaviour. They don't “look things up” unless connected to tools or data. Temperature controls how creative or predictable answers are."
},
{
"t": "Prompt Engineering",
"p": "Artificial Intelligence",
"h": "artificial-intelligence.html#prompt-engineering",
"x": "Clear instructions get better results. Prompting is the skill of explaining a task well to a model. Give context, the goal, and the format you want. Show examples of good output. Break complex tasks into steps. Test prompts on several inputs, not just one."
},
{
"t": "RAG",
"p": "Artificial Intelligence",
"h": "artificial-intelligence.html#rag",
"x": "Retrieval-Augmented Generation lets a model answer questions using your own documents. Documents are split into chunks and turned into embeddings. A vector search finds the passages most relevant to the question. Those passages are given to the LLM as context. The answer can cite its sources — and stays up to date without retraining."
},
{
"t": "AI Agents",
"p": "Artificial Intelligence",
"h": "artificial-intelligence.html#ai-agents",
"x": "An agent is an AI system that can plan steps and use tools — search, APIs, code — to complete a task, not just answer a question. Loop: plan → act with a tool → observe → continue. Tools give agents real capabilities, and real risks. Limit permissions and keep a human approval step for important actions. Log every action for review."
},
{
"t": "MLOps",
"p": "Artificial Intelligence",
"h": "artificial-intelligence.html#mlops",
"x": "MLOps brings DevOps discipline to machine learning so models can be deployed and maintained reliably. Version data, code and models together. Automated training, testing and deployment pipelines. Monitor for drift: real-world data changes over time. Governance: who approved this model, and on what data?"
},
{
"t": "AI platforms",
"p": "Artificial Intelligence",
"h": "artificial-intelligence.html#ai-platforms",
"x": "Once the concepts are clear, pick the platform you use at work and go deeper. Each one applies the same ideas with its own names and tools. Microsoft Copilot AI assistance across Microsoft 365 apps. Azure AI Microsoft's services for building AI applications. Amazon Bedrock Access to foundation models on AWS. Google Vertex AI Google Cloud's platform for building and running models."
},
{
"t": "Data Fundamentals",
"p": "Data & Analytics",
"h": "data-analytics.html#data-fundamentals",
"x": "Before analysis comes understanding what data you have and what it means. Structured (tables), semi-structured (JSON) and unstructured (text, images). Data types, keys and relationships. Descriptive, diagnostic, predictive and prescriptive analytics. Always ask: what decision will this analysis support?"
},
{
"t": "SQL for Analysis",
"p": "Data & Analytics",
"h": "data-analytics.html#sql-for-analysis",
"x": "SQL is the common language for asking questions of data. SELECT, WHERE, ORDER BY to retrieve and filter. GROUP BY with SUM, COUNT, AVG to summarise. JOINs to combine tables. Window functions for running totals and rankings."
},
{
"t": "Data Modelling",
"p": "Data & Analytics",
"h": "data-analytics.html#data-modelling",
"x": "A good model makes data easy to query and hard to misread. Facts (measurements) and dimensions (context). Star schema for reporting. Clear naming and one definition per metric. Model for the questions people actually ask."
},
{
"t": "ETL & Pipelines",
"p": "Data & Analytics",
"h": "data-analytics.html#etl-and-pipelines",
"x": "Pipelines move data from source systems to where it is analysed. Extract from sources, Transform to clean and shape, Load into the target. ELT loads first and transforms inside the warehouse. Schedule, monitor and alert on failures. Make pipelines re-runnable without creating duplicates."
},
{
"t": "Warehouses & Lakes",
"p": "Data & Analytics",
"h": "data-analytics.html#warehouses-and-lakes",
"x": "Where analytical data lives. Data warehouse: structured, cleaned, optimised for reporting. Data lake: raw data of any type, stored cheaply. Lakehouse: combines both approaches. Choose based on users, data types and cost."
},
{
"t": "Dashboards & BI",
"p": "Data & Analytics",
"h": "data-analytics.html#dashboards-and-bi",
"x": "Dashboards put the right numbers in front of the right people. Start from the decision, then choose the metrics. A few clear charts beat many busy ones. Consistent colours, labels and time ranges. Show trends and targets, not just totals."
},
{
"t": "Data Quality",
"p": "Data & Analytics",
"h": "data-analytics.html#data-quality",
"x": "Bad data leads to confident wrong decisions. Dimensions: accuracy, completeness, consistency, timeliness. Validate data at the point it enters the system. Automated checks in pipelines. Fix problems at the source, not in every report."
},
{
"t": "Data Governance",
"p": "Data & Analytics",
"h": "data-analytics.html#data-governance",
"x": "Governance decides who owns data, who can use it, and how. Data owners and stewards for each domain. A shared glossary of business terms. Access control and data classification. Compliance with data protection rules such as PDPL."
},
{
"t": "Relational Design",
"p": "Database Management Systems",
"h": "databases.html#relational-design",
"x": "Good design prevents problems that no amount of tuning can fix later. Tables, rows, columns and primary keys. Foreign keys enforce relationships. Normalization removes duplication (1NF, 2NF, 3NF). Denormalize only on purpose, for performance."
},
{
"t": "SQL & PL/SQL",
"p": "Database Management Systems",
"h": "databases.html#sql-and-pl-sql",
"x": "SQL queries and changes data; procedural extensions add logic inside the database. DDL (CREATE, ALTER) and DML (INSERT, UPDATE, DELETE). Transactions: COMMIT, ROLLBACK and ACID properties. Stored procedures, functions and triggers. Bind variables for speed and security."
},
{
"t": "Installation & Configuration",
"p": "Database Management Systems",
"h": "databases.html#installation-and-configuration",
"x": "A clean, documented installation saves months of trouble. Check OS and hardware prerequisites. Separate disks for data, logs and backups. Memory and process parameters sized for the workload. Record every setting in a build document."
},
{
"t": "Security & Auditing",
"p": "Database Management Systems",
"h": "databases.html#security-and-auditing",
"x": "Databases hold the most valuable data, so they need layered protection. Least-privilege users and roles. Encryption at rest and in transit. Auditing of privileged and sensitive actions. Remove default accounts and sample schemas."
},
{
"t": "Backup & Recovery",
"p": "Database Management Systems",
"h": "databases.html#backup-and-recovery",
"x": "A backup only counts if you can restore it. Full, incremental and archive log backups. Point-in-time recovery. Store copies off-site and offline. Test restores on a schedule."
},
{
"t": "Performance Tuning",
"p": "Database Management Systems",
"h": "databases.html#performance-tuning",
"x": "Tuning is finding the real bottleneck, then fixing the cause. Read execution plans. Indexes: help reads, cost writes. Find the top resource-consuming queries first. Fix the SQL before adding hardware."
},
{
"t": "High Availability",
"p": "Database Management Systems",
"h": "databases.html#high-availability",
"x": "Keeping the database available when a server or site fails. Clustering for server failure. Standby databases for site failure. Automatic vs manual failover. Regular switchover tests."
},
{
"t": "Replication",
"p": "Database Management Systems",
"h": "databases.html#replication",
"x": "Copying data between databases for availability, reporting or distribution. Synchronous: no data loss, more latency. Asynchronous: faster, small risk of loss. Logical vs physical replication. Monitor replication lag closely."
},
{
"t": "Database engines",
"p": "Database Management Systems",
"h": "databases.html#database-engines",
"x": "Once the concepts are clear, pick the platform you use at work and go deeper. Each one applies the same ideas with its own names and tools. Oracle Database Enterprise engine common in banks and government. Microsoft SQL Server Widely used with Windows and Microsoft stacks. MySQL Popular open-source engine for web applications. PostgreSQL Feature-rich open-source relational database. MongoDB Document database for flexible, JSON-like data."
},
{
"t": "ERP Fundamentals",
"p": "ERP & Enterprise Applications",
"h": "erp.html#erp-fundamentals",
"x": "Enterprise Resource Planning brings an organisation's core processes into one integrated system with one shared database. Modules for finance, procurement, inventory, HR and more. One source of truth instead of disconnected spreadsheets. Configuration vs customisation — configure first. Implementation is a business project, not only an IT one."
},
{
"t": "Finance",
"p": "ERP & Enterprise Applications",
"h": "erp.html#finance",
"x": "The financial modules record every transaction and produce the organisation's accounts. General Ledger and chart of accounts. Accounts Payable and Accounts Receivable. Fixed Assets and Cash Management. Period close and financial reporting."
},
{
"t": "Supply Chain",
"p": "ERP & Enterprise Applications",
"h": "erp.html#supply-chain",
"x": "Planning and moving goods from suppliers to customers. Demand and supply planning. Order management and fulfilment. Logistics and shipping. Visibility across the whole chain."
},
{
"t": "Inventory",
"p": "ERP & Enterprise Applications",
"h": "erp.html#inventory",
"x": "Knowing what stock you have, where it is, and what it's worth. Items, organisations, sub-inventories and locators. Receipts, issues and transfers. Cycle counting and physical inventory. Costing methods and valuation."
},
{
"t": "Purchasing",
"p": "ERP & Enterprise Applications",
"h": "erp.html#purchasing",
"x": "The procure-to-pay process, from request to supplier payment. Requisition → purchase order → receipt → invoice → payment. Supplier management and approved lists. Approval hierarchies and limits. Three-way match: PO, receipt and invoice."
},
{
"t": "Manufacturing",
"p": "ERP & Enterprise Applications",
"h": "erp.html#manufacturing",
"x": "Turning materials into products, on schedule and at the right cost. Bills of materials and routings. Discrete and process manufacturing. Work orders and batches. Quality checks and cost tracking."
},
{
"t": "ERP Administration",
"p": "ERP & Enterprise Applications",
"h": "erp.html#erp-administration",
"x": "Keeping the ERP system healthy, secure and current. User, role and responsibility management. Patching and upgrades. Concurrent jobs and scheduled processes. Performance and environment cloning."
},
{
"t": "Integration & APIs",
"p": "ERP & Enterprise Applications",
"h": "erp.html#integration-and-apis",
"x": "ERP rarely works alone; it exchanges data with banks, e-invoicing, CRM, HR and more. REST and SOAP APIs. Middleware and integration platforms. File-based interfaces for legacy systems. Error handling and reconciliation."
},
{
"t": "ERP systems",
"p": "ERP & Enterprise Applications",
"h": "erp.html#erp-systems",
"x": "Once the concepts are clear, pick the platform you use at work and go deeper. Each one applies the same ideas with its own names and tools. Oracle E-Business Suite Established on-premises ERP used by many large organisations. Oracle Fusion Cloud Oracle's cloud ERP and SCM suite. SAP S/4HANA SAP's current-generation ERP. Microsoft Dynamics 365 Microsoft's ERP and CRM applications."
},
{
"t": "DevOps Culture",
"p": "DevOps & Automation",
"h": "devops.html#devops-culture",
"x": "DevOps is first a way of working: shared ownership between the people who build and the people who run. Small, frequent changes instead of big risky releases. Blameless post-incident reviews. Measure: deployment frequency, lead time, failure rate, recovery time. Automate the boring, repeatable work."
},
{
"t": "Version Control",
"p": "DevOps & Automation",
"h": "devops.html#version-control",
"x": "Every change to code and configuration is tracked, reviewed and reversible. Git: commits, branches, merges. Pull requests and code review. A simple branching strategy everyone follows. Keep infrastructure and configuration in Git too."
},
{
"t": "CI/CD",
"p": "DevOps & Automation",
"h": "devops.html#ci-cd",
"x": "Continuous Integration and Continuous Delivery automate building, testing and releasing. CI: every change is built and tested automatically. CD: every passing build can be released at the push of a button. Pipelines as code. Fast feedback: fail early, fix early."
},
{
"t": "Containers",
"p": "DevOps & Automation",
"h": "devops.html#containers",
"x": "Containers package an application with everything it needs, so it runs the same everywhere. Images are built from a simple definition file. Lighter and faster to start than virtual machines. Registries store and version images. Scan images for vulnerabilities."
},
{
"t": "Orchestration",
"p": "DevOps & Automation",
"h": "devops.html#orchestration",
"x": "Orchestration runs many containers across many servers reliably. Kubernetes is the common standard. Pods, deployments and services. Self-healing, scaling and rolling updates. Start simple; managed services remove a lot of work. Read the full Kubernetes guide →"
},
{
"t": "Infrastructure as Code",
"p": "DevOps & Automation",
"h": "devops.html#infrastructure-as-code",
"x": "Servers, networks and cloud resources defined in files instead of clicked together. Repeatable environments from the same code. Review infrastructure changes like code changes. Declarative tools describe the desired end state. Detect and correct drift."
},
{
"t": "Scripting",
"p": "DevOps & Automation",
"h": "devops.html#scripting",
"x": "Small scripts remove hours of manual work. PowerShell for Windows environments. Bash for Linux. Python for anything more complex. Make scripts safe to run twice."
},
{
"t": "Observability",
"p": "DevOps & Automation",
"h": "devops.html#observability",
"x": "Understanding what a system is doing from the outside, so problems are found quickly. Metrics, logs and traces. Dashboards for health; alerts for action. Service level objectives (SLOs). Alert on symptoms users feel, not every small spike."
},
{
"t": "What is Kubernetes?",
"p": "Kubernetes",
"h": "kubernetes.html#what-is-kubernetes",
"x": "A container packages one application with everything it needs. That's easy to run on one machine. Running hundreds of containers across many servers — restarting them when they crash, spreading load, rolling out new versions without downtime — is the hard part. That is the job Kubernetes does. Open source: started at Google, now maintained by the Cloud Native Computing Foundation (CNCF). Declarative: you describe the state you want (“3 copies of this app”); Kubernetes keeps making it true. Portable: the same files run on-premises or on any major cloud. When you may not need it: one or two small applications are often simpler on a single server or a managed app service. Kubernetes pays off when you have many services and teams."
},
{
"t": "Architecture",
"p": "Kubernetes",
"h": "kubernetes.html#architecture",
"x": "A Kubernetes cluster has two parts: the control plane that makes decisions, and the worker nodes that run your containers. Component Where What it does API server Control plane The front door; every command goes through it. etcd Control plane Key-value store holding the whole cluster's state. Scheduler Control plane Chooses which node each new pod runs on. Controller manager Control plane Loops that keep actual state equal to desired state. kubelet Each node Starts and watches the containers on that node. kube-proxy Each node Handles networking rules for services. Container runtime Each node Actually runs containers (e.g. containerd)."
},
{
"t": "Pods and Deployments",
"p": "Kubernetes",
"h": "kubernetes.html#pods-and-deployments",
"x": "A Pod is the smallest unit Kubernetes runs: one or more containers that share network and storage. You rarely create pods directly. Instead you create a Deployment , which keeps the right number of pod copies (replicas) running and handles updates. # deployment.yaml — run 3 copies of a web app apiVersion: apps/v1 kind: Deployment metadata: name: web spec: replicas: 3 selector: matchLabels: app: web template: metadata: labels: app: web spec: containers: - name: web image: nginx:1.27 ports: - containerPort: 80 Rolling update: change the image and pods are replaced gradually, with no downtime. Rollback: one command returns to the previous version. StatefulSet is used instead for databases and apps that need stable identity."
},
{
"t": "Services and Ingress",
"p": "Kubernetes",
"h": "kubernetes.html#services-and-ingress",
"x": "Pods come and go and their IP addresses change. A Service gives a group of pods one stable name and address, and spreads traffic across them. Type Reachable from ClusterIP Inside the cluster only (the default). NodePort A fixed port on every node. LoadBalancer The internet, through a cloud load balancer. An Ingress sits in front of services and routes web traffic by host name or path (for example /api to one service and / to another), usually with TLS certificates."
},
{
"t": "Configuration and Secrets",
"p": "Kubernetes",
"h": "kubernetes.html#configuration-and-secrets",
"x": "Keep settings out of container images so the same image works in test and production. ConfigMap: plain settings such as URLs and feature flags. Secret: passwords, tokens and keys. Only base64-encoded by default — enable encryption at rest and limit who can read them. Namespaces: separate teams or environments (dev, test, prod) inside one cluster."
},
{
"t": "Storage",
"p": "Kubernetes",
"h": "kubernetes.html#storage",
"x": "Containers lose their files when they restart. For data that must survive, Kubernetes uses persistent volumes. PersistentVolume (PV): a piece of real storage — a cloud disk or a SAN/NAS volume. PersistentVolumeClaim (PVC): an app's request for storage (“10 GB, read-write”). StorageClass: lets Kubernetes create volumes automatically when a claim appears."
},
{
"t": "Scaling and Self-Healing",
"p": "Kubernetes",
"h": "kubernetes.html#scaling-and-self-healing",
"x": "This is where Kubernetes earns its place: it keeps applications running without someone watching all night. Self-healing: crashed containers restart; pods on a failed node move to healthy ones. Health probes: liveness (restart if stuck) and readiness (send traffic only when ready). Horizontal Pod Autoscaler: adds or removes pods based on CPU, memory or custom metrics. Cluster autoscaler: adds or removes nodes in the cloud as demand changes."
},
{
"t": "Kubernetes Security",
"p": "Kubernetes",
"h": "kubernetes.html#kubernetes-security",
"x": "A cluster has many moving parts, so security needs several layers. RBAC: give users and service accounts only the permissions they need. Network policies: by default every pod can talk to every other pod — restrict it. Image security: scan images, use trusted registries, avoid running as root. Keep it patched: upgrade the cluster version regularly; old versions lose support. Audit logs to see who changed what."
},
{
"t": "kubectl Essentials",
"p": "Kubernetes",
"h": "kubernetes.html#kubectl-essentials",
"x": "kubectl is the command-line tool for talking to a cluster. These commands cover most daily work. # see what is running kubectl get nodes kubectl get pods -n my-namespace kubectl get deployments,services # apply your YAML files (create or update) kubectl apply -f deployment.yaml # investigate a problem kubectl describe pod web-7d4b9c8f6-x2k9p kubectl logs web-7d4b9c8f6-x2k9p kubectl exec -it web-7d4b9c8f6-x2k9p -- sh # scale, update, roll back kubectl scale deployment web --replicas=5 kubectl set image deployment/web web=nginx:1.28 kubectl rollout status deployment/web kubectl rollout undo deployment/web Tip: when a pod won't start, run kubectl describe pod first. The Events section at the bottom usually says exactly why — a wrong image name, missing secret, or not enough resources."
},
{
"t": "Managed Kubernetes",
"p": "Kubernetes",
"h": "kubernetes.html#managed-kubernetes",
"x": "Running the control plane yourself is hard work. Every major cloud offers a managed service that runs it for you, so you only manage your applications and worker nodes. Azure Kubernetes Service AKS — Microsoft Azure Elastic Kubernetes Service EKS — Amazon Web Services Container Engine for Kubernetes OKE — Oracle Cloud Cloud Container Engine CCE — Huawei Cloud Container Service for Kubernetes ACK — Alibaba Cloud To practise for free on your own laptop, use a local cluster tool such as minikube or kind, then try the commands above."
},
{
"t": "Backup Strategy",
"p": "Backup, DR & Business Continuity",
"h": "backup-dr.html#backup-strategy",
"x": "A backup strategy answers: what do we protect, how often, for how long, and where? Classify systems and data by importance. Full, incremental and differential backups. Retention periods based on business and legal needs. Automate, monitor and report on every job."
},
{
"t": "3-2-1 Rule",
"p": "Backup, DR & Business Continuity",
"h": "backup-dr.html#3-2-1-rule",
"x": "A simple rule that survives most disasters. 3 copies of your data. 2 different types of storage. 1 copy off-site. Modern extension: 3-2-1-1-0 — one offline or immutable copy, zero restore errors."
},
{
"t": "RPO & RTO",
"p": "Backup, DR & Business Continuity",
"h": "backup-dr.html#rpo-and-rto",
"x": "Two numbers that drive every recovery design. RPO (Recovery Point Objective): how much data loss is acceptable. RTO (Recovery Time Objective): how long the service can be down. Agree them with the business, system by system. Lower RPO and RTO cost more — spend where it matters."
},
{
"t": "Replication",
"p": "Backup, DR & Business Continuity",
"h": "backup-dr.html#replication",
"x": "Copying data continuously to another location so it's ready when needed. Storage, database or application-level replication. Synchronous vs asynchronous. Replication copies mistakes too — it is not a backup. Keep backups alongside replication."
},
{
"t": "DR Sites",
"p": "Backup, DR & Business Continuity",
"h": "backup-dr.html#dr-sites",
"x": "Where you recover to when the main site is lost. Cold site: space and power, little else — slow to start. Warm site: partly ready — hours to start. Hot site: running and ready — minutes. Cloud regions are now a common DR site."
},
{
"t": "Ransomware Recovery",
"p": "Backup, DR & Business Continuity",
"h": "backup-dr.html#ransomware-recovery",
"x": "Ransomware targets backups first, so recovery must be planned for it. Immutable or offline backup copies. Separate credentials for backup systems. Scan restored data before going live. An isolated clean-room environment for recovery."
},
{
"t": "Business Continuity Plan",
"p": "Backup, DR & Business Continuity",
"h": "backup-dr.html#business-continuity-plan",
"x": "The BCP covers people and processes, not only IT systems. Business impact analysis: which processes matter most. Alternate ways of working during disruption. Communication plans and contact lists. Clear roles and decision authority."
},
{
"t": "DR Testing",
"p": "Backup, DR & Business Continuity",
"h": "backup-dr.html#dr-testing",
"x": "An untested plan is just a hopeful document. Tabletop exercises to walk through the plan. Partial and full failover tests. Measure actual RTO and RPO against targets. Update the plan after every test."
},
{
"t": "ITIL 4",
"p": "IT Service Management",
"h": "itsm.html#itil-4",
"x": "ITIL is the most widely used framework for IT service management. The service value system and value chain. Guiding principles: focus on value, start where you are, keep it simple. 34 management practices. Adapt it to your organisation — don't copy it word for word."
},
{
"t": "Service Desk",
"p": "IT Service Management",
"h": "itsm.html#service-desk",
"x": "The single point of contact between users and IT. Multiple channels: portal, phone, email, chat. Self-service and a knowledge base. First-contact resolution. Friendly, clear communication."
},
{
"t": "Incident Management",
"p": "IT Service Management",
"h": "itsm.html#incident-management",
"x": "Restoring normal service as quickly as possible. Log, categorise and prioritise by impact and urgency. Escalation paths and major incident process. Keep users informed. Close only when the user confirms the fix."
},
{
"t": "Problem Management",
"p": "IT Service Management",
"h": "itsm.html#problem-management",
"x": "Finding and removing the root causes of incidents. Reactive: investigate after repeated incidents. Proactive: find weaknesses before they hurt. Known errors and workarounds. Root-cause analysis techniques such as 5 Whys."
},
{
"t": "Change Management",
"p": "IT Service Management",
"h": "itsm.html#change-management",
"x": "Making changes safely without slowing the organisation down. Standard, normal and emergency changes. Risk assessment and approval. Change calendar and freeze periods. Review failed changes to learn from them."
},
{
"t": "SLAs",
"p": "IT Service Management",
"h": "itsm.html#slas",
"x": "Service Level Agreements set clear expectations between IT and the business. Availability and response/resolution targets. OLAs between internal teams. Measure and report regularly. Targets the business actually cares about."
},
{
"t": "Monitoring & NOC",
"p": "IT Service Management",
"h": "itsm.html#monitoring-and-noc",
"x": "The Network Operations Center watches infrastructure and services around the clock. Event management: filter noise, act on what matters. Runbooks for common alerts. Shift handovers. Link alerts to incidents automatically."
},
{
"t": "CMDB",
"p": "IT Service Management",
"h": "itsm.html#cmdb",
"x": "The Configuration Management Database records IT assets and how they depend on each other. Configuration items (CIs) and relationships. Know what a change or outage will affect. Automated discovery to keep it accurate. An outdated CMDB is worse than none."
},
{
"t": "Enterprise Architecture",
"p": "Enterprise Architecture & Digital Transformation",
"h": "enterprise-architecture.html#enterprise-architecture",
"x": "Enterprise architecture is the blueprint that connects business strategy to the systems that deliver it. Four domains: business, data, application, technology. Current state (as-is) and target state (to-be). A roadmap to move between them. Principles and standards to guide decisions."
},
{
"t": "TOGAF",
"p": "Enterprise Architecture & Digital Transformation",
"h": "enterprise-architecture.html#togaf",
"x": "TOGAF is the most widely used enterprise architecture framework. The Architecture Development Method (ADM) cycle. Architecture repository and building blocks. Stakeholder management and viewpoints. Tailor it to the size of your organisation."
},
{
"t": "Capability Mapping",
"p": "Enterprise Architecture & Digital Transformation",
"h": "enterprise-architecture.html#capability-mapping",
"x": "A capability map shows what the organisation does, independent of how or who. Stable view that survives reorganisations. Assess each capability's maturity. Find gaps and duplicated systems. Prioritise investment where it matters most."
},
{
"t": "Digital Strategy",
"p": "Enterprise Architecture & Digital Transformation",
"h": "enterprise-architecture.html#digital-strategy",
"x": "A digital strategy explains how technology will help reach business goals. Start from the organisation's vision and goals. Maturity assessment of where you are today. Prioritised initiatives with clear owners. KPIs to show progress."
},
{
"t": "Process Redesign",
"p": "Enterprise Architecture & Digital Transformation",
"h": "enterprise-architecture.html#process-redesign",
"x": "Digitising a bad process just makes it fail faster. Fix the process first. Map the current process end to end. Remove waste, delays and duplicate approvals. Design around the customer's journey. Then decide what to automate."
},
{
"t": "E-Services",
"p": "Enterprise Architecture & Digital Transformation",
"h": "enterprise-architecture.html#e-services",
"x": "Delivering services online so people don't need to visit, call or print. Design from the user's point of view. Simple forms and clear status updates. Integration between back-end systems. Accessibility and Arabic/English support."
},
{
"t": "Change Management",
"p": "Enterprise Architecture & Digital Transformation",
"h": "enterprise-architecture.html#change-management",
"x": "Technology changes are easy compared with changing how people work. Explain why the change matters. Involve users early. Training and support during rollout. Measure adoption, not just go-live."
},
{
"t": "Vision 2030",
"p": "Enterprise Architecture & Digital Transformation",
"h": "enterprise-architecture.html#vision-2030",
"x": "Saudi Vision 2030 makes digital transformation a national priority. Digital government and e-services. Data and AI as national capabilities. Cloud-first policies. Building local digital skills."
},
{
"t": "IT Governance",
"p": "IT Governance, Risk & Compliance",
"h": "grc.html#it-governance",
"x": "Governance makes sure IT investments support the organisation's goals and are well controlled. Clear decision rights and committees. Alignment between IT and business strategy. Performance measurement. Accountability at board level."
},
{
"t": "COBIT",
"p": "IT Governance, Risk & Compliance",
"h": "grc.html#cobit",
"x": "COBIT is a framework for governance and management of enterprise IT. Governance and management objectives. Design factors to tailor the system. Capability and maturity levels. Works alongside ITIL and ISO standards."
},
{
"t": "Risk Management",
"p": "IT Governance, Risk & Compliance",
"h": "grc.html#risk-management",
"x": "Identifying what could go wrong, how likely it is, and what to do about it. Identify, assess, treat, monitor. Likelihood × impact. Treat, transfer, avoid or accept. A living risk register with owners."
},
{
"t": "ISO 27001",
"p": "IT Governance, Risk & Compliance",
"h": "grc.html#iso-27001",
"x": "The international standard for an Information Security Management System (ISMS). Scope, context and leadership commitment. Risk assessment and Statement of Applicability. Annex A controls. Internal audits and continual improvement."
},
{
"t": "NCA ECC",
"p": "IT Governance, Risk & Compliance",
"h": "grc.html#nca-ecc",
"x": "The Essential Cybersecurity Controls from Saudi Arabia's National Cybersecurity Authority. Mandatory for government and critical national infrastructure entities. Main domains: governance, defence, resilience, third-party and cloud, industrial control systems. Self-assessment and compliance reporting. Maps well to ISO 27001 controls."
},
{
"t": "PDPL",
"p": "IT Governance, Risk & Compliance",
"h": "grc.html#pdpl",
"x": "Saudi Arabia's Personal Data Protection Law governs how personal data is collected and used. Lawful basis and clear purpose for processing. Rights of data subjects. Rules for transferring data outside the Kingdom. Breach notification duties."
},
{
"t": "IT Audit",
"p": "IT Governance, Risk & Compliance",
"h": "grc.html#it-audit",
"x": "Independent review that controls exist and actually work. Audit planning based on risk. Testing design and operating effectiveness of controls. Evidence collection. Findings, recommendations and follow-up."
},
{
"t": "Policies & Procedures",
"p": "IT Governance, Risk & Compliance",
"h": "grc.html#policies-and-procedures",
"x": "Written rules that turn frameworks into daily practice. Policy (what) vs procedure (how). Short, clear and actually read. Owners and review dates. Linked to controls and audit evidence."
}
];
