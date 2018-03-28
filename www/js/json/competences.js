/********Josephs Competency Offline Object JS Code Start******/

var competences = [
    {
        "Code": "PPP 3.1",
        "Competence Statement": "Direct the participatory development of a protected area management plan using a recognised format and process.",
        "Details": "*  Developing medium- to long-term management strategies, objectives and plans covering all aspects of protected area management, according to a recognised comprehensive format and using a rational, participatory process.\n* Ensuring adequate identification, participation and consideration of stakeholders in the process.\n* Communicating the plan to PA staff and local stakeholders."
    },
    {
        "Code": "PPP 3.2",
        "Competence Statement": "Direct a structured threat assessment for a protected area.",
        "Details": "* Assessing and evaluating specific pressures and threats to a protected area using a structured process.\n* Identifying resulting impacts."
    },
    {
        "Code": "PPP 3.3",
        "Competence Statement": "Direct the development of a protected area zonation system.",
        "Details": "* Rational identification of zones according to the functions and category of a protected area and defined criteria for zonation.\n* Developing specific regulations for each zone.\n* Ensuring adequate identification, participation and consideration of stakeholders in the process."
    },
    {
        "Code": "PPP 3.4",
        "Competence Statement": "Direct development of project proposals and plans for a protected area using recognised formats and processes.",
        "Details": "* Identifying needs and opportunities for projects.\n* Preparing proposals for donor or government assisted projects (targeted and time limited investments) using a prescribed format.\n* Ensuring adequate identification and participation of stakeholders and implementation partners in the process."
    },
    {
        "Code": "PPP 3.5",
        "Competence Statement": "Direct implementation of projects and plans.",
        "Details": "* Ensuring that management plans and/projects are implemented in a timely and efficient manner according to plans/contracts.\n* Preparing detailed plans for implementation.\n* Monitoring and evaluating implementation against targets and objectives.\n* Reporting on overall performance and impact."
    },
    {
        "Code": "PPP 3.6",
        "Competence Statement": "Direct the development of risk/disaster assessments and contingency plans.",
        "Details": "* Identifying the major threats and risks for major disasters to a protected area (e.g. fire, flood earthquake, pollution, drought, armed conflict, humanitarian crises).\n* Preparing plans for minimising the risks and for dealing with disasters.\n* Putting in place means for managing waste and controlling pollution (procedures, facilities, equipment).\n* Putting in place means for dealing with disasters (acquiring equipment, design of infrastructure, training staff and stakeholders, etc.)."
    },
    {
        "Code": "PPP 3.7",
        "Competence Statement": "Direct identification and implementation of measures to address the impacts of climate change.",
        "Details": "* Identifying the major threats and risks to a protected area resulting from climate change (with respect to species, ecosystems, local communities and economies).\n* Identifying options and preparing plans for avoidance, mitigation and adaptation.\n* Putting in place means for monitoring climate change and its impacts and the effectiveness of interventions.\n* Putting in place means for implementing plans (securing funding, raising awareness, training staff and stakeholders, etc.)."
    },
    {
        "Code": "PPP 3.8",
        "Competence Statement": "Direct the planning, implementation and monitoring of major construction projects.",
        "Details": "* Preparing plans for the location and specifications of physical infrastructure.\n* Working with designers, architects and developers to ensure appropriate specifications for major structures and installations (e.g. visitor centres, ranger stations, tourism facilities, roads, bridges, etc.).\n* Ensuring that environmental, landscape and social impacts are minimised.\n* Ensuring that infrastructure and construction projects by other parties in a protected area conform to agreements and regulations and are subject to required impact assessments."
    },
    {
        "Code": "PPP 3.9",
        "Competence Statement": "Coordinate protected area management with activities of neighbouring land and resource owners and users.",
        "Details": "* Identifying owners, rights holders and resource users that neighbour a protected area or operate inside it.\n* Ensuring their compliance with laws, regulations and agreements.\n* Working with neighbours to secure and protect the integrity of a protected area and its resources.\n* Developing collaborative plans and projects to further the objectives of a protected area."
    },
    {
        "Code": "PPP 3.10",
        "Competence Statement": "Contribute to Environmental Impact Assessments (EIAs) of projects and proposals affecting a protected area.",
        "Details": "* Providing factual information to EIA processes and proposing measures for impact avoidance and mitigation.\n* Representing the interests of a protected area at hearings.\n* Coordinating responses to draft EIAs."
    },
    {
        "Code": "PPP 4.1",
        "Competence Statement": "Coordinate development and updating of national protected area policy and legislation.",
        "Details": "* Taking a leading role in reviews of protected area policy and legislation.\n* Drafting and/or reviewing new and revised legislation.\n* Integrating PA issues within related sectoral policy and legislation.\n* Contributing to National Environmental Action Plans and National Biodiversity Strategies and Action Plans.\n* Contributing to setting targets for protected area systems."
    },
    {
        "Code": "PPP 4.2",
        "Competence Statement": "Coordinate reviews of protected area policies, strategies and plans.",
        "Details": "* Taking a leading role in reviews of progress in implementing policies, strategies and action plans.\n* Assessing progress towards achieving targets for individual PAs and the system as a whole.\n* Leading preparation of reports on implementation of actions under conventions and other agreements (e.g. Ramsar, CBD, etc.)."
    },
    {
        "Code": "PPP 4.3",
        "Competence Statement": "Coordinate processes for designing and establishing protected area systems.",
        "Details": "* Developing and directing plans for rational establishment/expansion of a protected area system.\n* Ensuring that PA systems meet requirements for coherence, adequacy and representativeness.\n* Ensuring that individual protected areas are appropriately located and designed (in terms of size, shape, boundaries).\n* Including a range of protected area categories and governance types.\n* Developing national and/or regional PA System Plans/Master Plans."
    },
    {
        "Code": "PPP 4.4",
        "Competence Statement": "Coordinate processes for gazetting, categorising, establishing and modifying protected areas.",
        "Details": "* Leading the legal gazettement and establishment of protected areas according to national laws and regulations.\n* Applying management categories according to national legislation and IUCN guidance.\n* Leading the process for modifying protected areas according to national laws and regulations.\n* Leading the establishment of regional networks of protected areas and conservation\n sites (e.g. Natura 2000 sites in the European Union)."
    },
    {
        "Code": "PPP 4.5",
        "Competence Statement": "Coordinate processes for establishing and maintaining the status of internationally designated protected areas.",
        "Details": "* Leading the legal establishment of internationally designated areas (e.g. UNESCO World Heritage Sites, Biosphere Reserves, Ramsar Sites).\n* Leading the process for identifying and designating internationally acknowledged conservation areas (e.g. Key Biodiversiity  Areas).\n* Conducting activities to monitor and maintain the status of internationally designated and acknowledged areas."
    },
    {
        "Code": "PPP 4.6",
        "Competence Statement": "Coordinate processes for establishing ecological networks and connectivity between protected areas.",
        "Details": "* Developing and directing plans for the establishment of ecological networks, corridors, buffer zones, landscape linkages and other areas that complement protected area systems and improve connectivity.\n* Developing plans for multifunctional landscape/ecosystem scale conservation (e.g. watershed management plans, ecoregional plans, ecological networks, etc.).\n* Working with other sectors to establish required connectivity between PAs.\n* Developing national and regional ecological network plans."
    },
    {
        "Code": "PPP 4.7",
        "Competence Statement": "Coordinate processes for recognising and establishing indigenous peoples' and community conserved areas.",
        "Details": "* Seeking formal recognition of the principles of indigenous peoples' and community conserved areas (ICCAs).\n* Working with local and indigenous peoples to identify and secure recognition of (ICCAs)."
    },
    {
        "Code": "PPP 4.8",
        "Competence Statement": "Coordinate trans-boundary protected area and conservation initiatives.",
        "Details": "* Working with equivalent authorities in neighbouring countries/ territories:\n- to harmonise laws, regulations, boundaries and zones of neighbouring protected areas.\n- to develop coordinated PA planning and management, sharing of information, monitoring and collaborative activities."
    },
    {
        "Code": "PPP 4.9",
        "Competence Statement": "Coordinate protected area system-wide responses to climate change and associated impacts.",
        "Details": "* Developing and directing plans for responses at the site and system level to impacts of climate change.\n* Developing and directing plans for addressing specific impacts on vulnerable species and ecosystems.\n* Developing and directing plans for addressing specific impacts on PA communities and economies.\n* Proposing amendments to the national system of protected areas in response to climate change.\n* Mobilising international support for climate change response (e.g. REDD +)."
    },
    {
        "Code": "PPP 4.10",
        "Competence Statement": "Coordinate Strategic Environmental Assessments (SEAs) affecting protected areas.",
        "Details": "* Taking a leading role in SEA processes relevant to PAs and biodiversity conservation.\n* Representing the interests of a protected area system in SEAs."
    },
    {
        "Code": "PPP 4.11",
        "Competence Statement": "Coordinate measures for offsetting or securing compensation for damage to protected areas.",
        "Details": "* Taking a leading role in SEA processes relevant to PAs and biodiversity conservation.\n* Representing the interests of the protected area system in SEAs."
    },
    {
        "Code": "PPP 4.12",
        "Competence Statement": "Coordinate initiatives to determine the value of the services provided by the ecosystems of protected areas.",
        "Details": "* Organising economic valuations of the social, cultural and ecological services provided by a PA, ecosystem or landscape using standard techniques.\n* Explaining and promoting the concept and uses of the ecosystem services approach to national and regional authorities."
    },
    {
        "Code": "PPP 4.13",
        "Competence Statement": "Coordinate integration of protected area policy and management with other sectors.",
        "Details": "* Engaging with other sectors whose activities affect or are affected by protected areas.\n* Seeking solutions to conflicting interests and activities.\n* Identifying opportunities for cooperation in pursuit of shared interests and synergies.\n* Encouraging other sectors to modify their plans and activities to improve biodiversity conservation and protected area connectivity."
    },
    {
        "Code": "PPP 4.14",
        "Competence Statement": "Promote and enable management-oriented research to support protected area planning and management.",
        "Details": "* Identifying research priorities for improving protected area planning and management.\n* Encouraging and enabling management-oriented research to take place on a national and site basis.\n* Ensuring dissemination of research results and their incorporation into planning and management processes."
    },
    {
        "Code": "PPP 4.15",
        "Competence Statement": "Coordinate major proposals for support and funding for protected areas.",
        "Details": "* Identifying and mobilising sources of national support for establishing and maintaining protected areas (e.g. through national policy, direct budget allocations, coordination with other sectors).\n* Identifying and mobilising sources of international support for establishing and maintaining protected areas (e.g. through multilateral and bilateral donors, NGOs, etc.).\n* Playing a leading role in development of proposals and negotiating agreements for support.\n* Supporting protected area administrations to identify and develop projects."
    },
    {
        "Code": "PPP 4.16",
        "Competence Statement": "Coordinate international initiatives for developing protected area policy and improving protected area planning and management.",
        "Details": "* Making a significant and recognised contribution internationally to protected area policy, planning and management (e.g. through publication of specialist guidance, active membership of an IUCN specialist group, conference presentations, provision of high level training, etc.).\n* Taking part in global policy development initiatives related to protected areas."
    },
    {
        "Code": "ORG 3.1",
        "Competence Statement": "Build the organisational capacity of a protected area administration.",
        "Details": "* Working effectively towards clearly identified and justified targets for improving organisational capacity (governance, management structure and style, strategies and plans, human resources, processes and systems, facilities and resources).\n* Identifying and securing support to improve organisational capacity.\n* Monitoring the performance of the organisation.\n* See also FRM 3, HRM 3."
    },
    {
        "Code": "ORG 3.2",
        "Competence Statement": "Establish procedures for strategic, planned and adaptive management of a protected area.",
        "Details": "* Adopting a strategic, structured and planned approach to management (as opposed to ad hoc and passive/reactive management).\n* Preparating and adopting management strategies and operational plans.\n* Establishing means for regular reviewing of management effectiveness and efficiency, and of adoption of planned programmes of management."
    },
    {
        "Code": "ORG 3.3",
        "Competence Statement": "Establish regular and systematic planning and monitoring of management activities.",
        "Details": "* Preparing periodic (e.g. annual) work plans for implementation of strategies, plans and projects.\n* Rationally allocating resources for implementation of work plans.\n* Monitoring of completion of plans."
    },
    {
        "Code": "ORG 3.4",
        "Competence Statement": "Establish systems and procedures to ensure high standards of ethics and behaviour among staff and partners.",
        "Details": "* Taking positive steps to avoid, prevent and resist illegal and/or dishonest behaviour and corruption within the institution and in its relations with others.\n* Taking positive steps to ensure that personnel and partners behave appropriately and respect human rights and dignity.\n* Taking appropriate action to investigate problems and respond where necessary.\n* Supporting personnel and partners in reporting and addressing illegal/dishonest/unethical activities."
    },
    {
        "Code": "ORG 3.5",
        "Competence Statement": "Build networks and develop collaborative relationships with other organisations.",
        "Details": "* Adopting an 'outward looking' approach to management.\n* Identifying partners among other PAs, authorities and agencies, community and civil society organisations and private sector organisations.\n* Maintaining networks and developing appropriate cooperation.\n* Negotiating local agreements to support management of a protected area (e.g. with businesses, local landowners, users, occupiers, managers, local communities, local authorities, NGOs, etc.)."
    },
    {
        "Code": "ORG 3.6",
        "Competence Statement": "Ensure establishment and implementation of participation and good governance.",
        "Details": "* Creating (in consultation with PA stakeholders, including local communities) appropriate structures and processes that establish and formalise their rights to participate in management.\n* Establishing mechanisms for PA communities to participate in decision making and assessment of management of a protected area and to address concerns and conflicts.\n* Establishing mechanisms for PA personnel to participate in planning, decision making and evaluation processes.\n* Ensuring transparency in planning, decision making and evaluation processes.\n* Introducing agreed forms of co-management, devolved management, establishment of buffer zones, community conserved zones, etc."
    },
    {
        "Code": "ORG 3.7",
        "Competence Statement": "Establish systems and procedures for ensuring health, safety and security in a protected area.",
        "Details": "* Maintaining and monitoring the health, safety and security of all personnel under the responsibility of a protected area administration.\n* Maintaining and monitoring the health, safety and security of visitors, users and PA communities.\n* Ensuring that infrastructure and equipment are safe and that safety equipment and measures are in place.\n* Introducing contingency plans for emergencies and disasters.\n* Ensuring that appropriate forms of insurance are in place.\n* See also HRM 3."
    },
    {
        "Code": "ORG 3.8",
        "Competence Statement": "Promote and implement change and innovation in management of a protected area.",
        "Details": "* Enabling and promoting the identification, development and introduction of new management approaches and practices, based on best practice elsewhere and on the lessons learned from management of a protected area.\n* Promoting the adoption and use of available new technologies to support management of a protected area.\n* Directing a protected area through processes of administrative and organisational change."
    },
    {
        "Code": "ORG 3.9",
        "Competence Statement": "Ensure effective management of information and knowledge.",
        "Details": "* Capturing, developing, sharing, and effectively using information and knowledge acquired by the institution, its personnel and stakeholders.\n* Maintaining updated, organised, secure and backed up information records.\n* Enabling sharing and use of knowledge.\n* Making use of knowledge in planning, decision making and adaptive management."
    },
    {
        "Code": "ORG 3.10",
        "Competence Statement": "Secure certified recognition of the quality of management of a protected area.",
        "Details": "* Acquiring a recognised assured quality standard (e.g. ISO 9000 (Quality Management), ISO 14000 (Environmental Management), ISO 24000 (Social Responsibility), IUCN Green List)."
    },
    {
        "Code": "ORG 4.1",
        "Competence Statement": "Establish system-wide standards and practices for effective and efficient management and administration of protected areas.",
        "Details": "* Defining targets and objectives for strengthening the overall system of management and administration for a system of PAs, in line with national legislation and international good practice.\n* Developing and introducing norms, standards, standard operating procedures and technical guidance to ensure effective PA management (for example for administration, human resource management, health, safety and security, management planning, etc.).\n* Assessing the performance and effectiveness of PA administrations and supporting PA Directors to implement required measures for improvement."
    },
    {
        "Code": "ORG 4.2",
        "Competence Statement": "Establish system-wide mechanisms for participation and good governance.",
        "Details": "* Ensuring that appropriate systems and processes for good governance are instituted across a protected area system.\n* Ensuring that stakeholders are officially enabled to participate in planning and decision making, using a range of appropriate techniques for consultation and collaborative management.\n    - In individual protected areas in the system.\n    - At the national level."
    },
    {
        "Code": "ORG 4.3",
        "Competence Statement": "Build organisational capacity of protected area authorities for management and governance.",
        "Details": "* Ensuring that the central authority has the personnel, resources and technical capacity to fulfil its functions (e.g. providing oversight and monitoring of a protected area system, providing up-to-date guidance and support for directors and personnel, managing information related to the planning and management of the system, developing policies and legislation).\n* Identifying organisational capacity needs of protected areas within the system.\n* Developing norms and standards for adequate organisational capacity of protected areas.\n* Identifying sources of support and lobbying for improvements."
    },
    {
        "Code": "ORG 4.4",
        "Competence Statement": "Identify and evaluate risks to protected area institutions and introduce risk management and contingency planning measures.",
        "Details": "* Ensuring that the main risks to the effective management of a protected area system and individual PAs have been identified, and that strategies and plans are in place to address these.\n* Risks may include financial uncertainties, administrative failures, project failures, legal liabilities, accidents, etc.\n* Ensuring rapid response to major administrative failures."
    },
    {
        "Code": "ORG 4.5",
        "Competence Statement": "Promote the adoption of new approaches, tools and techniques for managing protected areas across the system.",
        "Details": "* Gathering and disseminating information and promoting knowledge about 'latest' and 'best practice' approaches based on national and international innovations, conventions and agreements, IUCN guidelines, etc.\n* Assessing needs and opportunities for deploying new approaches that are appropriate and affordable."
    },
    {
        "Code": "ORG 4.6",
        "Competence Statement": "Promote the adoption of new technologies for managing protected areas across the system.",
        "Details": "* Gathering and disseminating information and promoting knowledge about 'latest' and 'best practice' approaches based on national and international innovations, conventions and agreements, IUCN guidelines, etc.\n* Assessing needs and opportunities for deploying new approaches that are appropriate, affordable and sustainable."
    },
    {
        "Code": "ORG 4.7",
        "Competence Statement": "Monitor and review performance and effectiveness of protected areas across the system.",
        "Details": "*  Directing the collation and analysis of reports from PA Administrations.\n* Making use of standard monitoring and reporting systems (e.g. Management Effectiveness Tracking Tool).\n* Disseminating statistics, analyses and conclusions.\n* Identifying and disseminating lessons learned and recommendations."
    },
    {
        "Code": "HRM 1.1",
        "Competence Statement": "Supervise and motivate work groups in completing practical tasks.",
        "Details": "* Ensuring that small work groups complete assigned practical tasks (field work, clerical, administrative etc.) in an effective and efficient way, according to instructions."
    },
    {
        "Code": "HRM 1.2",
        "Competence Statement": "Maintain and submit records of work activities.",
        "Details": "* Completing attendance records, time sheets and activity records correctly for oneself and for work teams.\n* Submitting required records correctly and on time."
    },
    {
        "Code": "HRM 2.1",
        "Competence Statement": "Prepare work plans and monitor their implementation.",
        "Details": "* Developing detailed work plans for teams and individuals.\n* Identifying personnel and resources required to implement work plans.\n* Monitoring and guiding performance of staff and checking results.\n* Providing feedback to teams and individuals.\n* Providing reports to senior staff."
    },
    {
        "Code": "HRM 2.2",
        "Competence Statement": "Supervise, motivate and evaluate performance of individuals and teams.",
        "Details": "* Providing detailed instructions and direction to individuals and teams.\n* Ensuring observance of personnel procedures.\n* Ensuring health, safety and welfare of personnel.\n* Ensuring effective and efficient completion of assigned tasks.\n* Providing feedback on performance and guidance on improvement."
    },
    {
        "Code": "HRM 2.3",
        "Competence Statement": "Identify causes of poor performance and workplace conflicts and recommend appropriate actions.",
        "Details": "* Identifying reasons for substandard performance by individuals and teams.\n* Identifying causes of workplace conflict.\n* Taking steps to rectify issues.\n* Providing reports to senior management and initiating formal procedures if required."
    },
    {
        "Code": "HRM 2.4",
        "Competence Statement": "Plan and organise delivery of training and learning activities.",
        "Details": "* Preparing training and learning plans according to identified needs.\n* Designing and short training courses, sessions/events involving both theoretical and practical elements.\n* Organising training/learning programmes, engaging trainers, coordinating with training organisations, etc.\n* Assessing the quality and impact of training."
    },
    {
        "Code": "HRM 2.5",
        "Competence Statement": "Maintain personnel and activity records.",
        "Details": "* Collating and storing time sheets, attendance records and activity records.\n* Keeping updated records of individual personnel employed by the organisation (full time, part time, contract staff, consultants, volunteers).\n* Records may include individuals� employment history, accomplishments, goals, feedback, disciplinary action (if any), capacity development, recognition and promotions.\n* Ensuring that records are secure and comply with data protection legislation."
    },
    {
        "Code": "HRM 3.1",
        "Competence Statement": "Identify personnel needs and structures for a protected area administration, define position descriptions and set performance standards.",
        "Details": "* Developing organisational structures and assigning personnel to positions in the structure.\n* Identifying competences required for all positions.\n* Preparing descriptions and performance requirements for all positions."
    },
    {
        "Code": "HRM 3.2",
        "Competence Statement": "Oversee and ensure adoption of comprehensive personnel procedures within a protected area administration.",
        "Details": "* Ensuring fair and transparent compliance with procedures for staff recruitment, advancement, evaluation, grievance, discipline, etc.\n* Ensuring compliance with labour and employment law, norms for employment of PA personnel, standards for equality, opportunity and diversity.\n* 'Personnel' include permanent and temporary staff, volunteers, helpers and regular collaborators."
    },
    {
        "Code": "HRM 3.3",
        "Competence Statement": "Ensure suitable working conditions, welfare, health, safety and security for personnel and other protected area users.",
        "Details": "* Ensuring safe and healthy working conditions for personnel (full time staff, part time staff, volunteers, collaborators).\n* Ensuring that infrastructure and equipment are safe and well maintained.\n* Ensuring that safety equipment is provided and maintained.\n* Conducting risk assessments for work activities.\n* Providing and maintaining first aid equipment and facilities.\n* Implementing special measures to ensure the security of vulnerable staff.\n* Developing procedures for dealing with emergencies.\n* Providing access to adequate accident and health insurance for personnel.\n* Providing required instruction, briefings and training."
    },
    {
        "Code": "HRM 3.4",
        "Competence Statement": "Identify capacity development needs of personnel, stakeholders and partners.",
        "Details": "Conducting structured assessments of capacity development needs.\n* Recommending programmes of capacity development according to needs analysis, competence needs and requirements/capacities of target groups."
    },
    {
        "Code": "HRM 3.5",
        "Competence Statement": "Institute capacity development programmes for protected area personnel, stakeholders and partners.",
        "Details": "* Providing access to relevant learning and training opportunities for all personnel. For example: formal learning leading to recognised qualifications; short-term training; competence-based learning; and informal learning in the work place (e.g. coaching, mentoring, knowledge and skills sharing).\n* Collecting and evaluating results and impacts of capacity development."
    },
    {
        "Code": "HRM 4.1",
        "Competence Statement": "Institute system-wide human resource management policies and procedures.",
        "Details": "* Establishing norms for: numbers of personnel and organisational structures; standard job descriptions; required competences; transparent and merit-based procedures for recruitment and advancement of personnel; training and professional development; accident insurance; equality of opportunity, diversity and inclusion."
    },
    {
        "Code": "HRM 4.2",
        "Competence Statement": "Develop and institutionalise capacity development programmes for protected area personnel.",
        "Details": "* Ensuring that capacity needs are identified and programmes of capacity development are made available to all personnel.\n* Establishing organisational norms, budgets and programmes for capacity development.\n* Introducing measures and opportunities for capacity development in the work place (e.g. coaching, mentoring, knowledge sharing, self-directed learning, access to e-learning).\n* Working with universities, colleges and other providers to: a) ensure that training and education programmes include competences required for protected area management; and b) ensure that that learning opportunities are available to employed staff (e.g. through modular programmes, e-learning, credit accumulation)."
    },
    {
        "Code": "HRM 4.3",
        "Competence Statement": "Promote the professionalisation of protected area management at the national level.",
        "Details": "* Introducing and promoting measures for increasing the professional status of PA management.\n* For example: official recognition of PA management as a profession/occupation, introduction of performance and competence standards, furthering opportunities for and access to training, education and professional development and to validated qualifications."
    },
    {
        "Code": "HRM 4.4",
        "Competence Statement": "Contribute to international initiatives for human resource management and capacity development in protected areas.",
        "Details": "* Making a significant and recognised contribution internationally to the field of human resource management and capacity development in protected areas.\n* For example: through publication of specialist guidance, active membership of an IUCN specialist group, conference presentations, provision of high level training, etc."
    },
    {
        "Code": "FRM 1.1",
        "Competence Statement": "Collect and present evidence of expenditure and other financial transactions.",
        "Details": "* Keeping simple records of transactions (e.g. collecting receipts).\n* Managing and accounting for small amounts of cash.\n* Providing basic summary reports on expenditure."
    },
    {
        "Code": "FRM 1.2",
        "Competence Statement": "Maintain records of materials, equipment and supplies.",
        "Details": "* Following procedures for record-keeping of equipment, supplies, consumables, etc.\n* Reporting on requirements for purchase, replacement and maintenance."
    },
    {
        "Code": "FRM 2.1",
        "Competence Statement": "Keep books, accounts and inventory records.",
        "Details": "* Entering financial information into a standard bookkeeping system (computerised or manual).\n* Maintaining records of assets (infrastructure, equipment and materials).\n* Managing payroll processes and documentation."
    },
    {
        "Code": "FRM 2.2",
        "Competence Statement": "Prepare reports on finances and assets.",
        "Details": "Producing reports and forecasts on income and expenditure.\n* Producing reports on income and tax liability.\n* Preparing required financial reports and reports on assets and inventory.\n* Completing all requirements for preparation for audit and inspection."
    },
    {
        "Code": "FRM 2.3",
        "Competence Statement": "Manage cash and cash transactions.",
        "Details": "* Following correct procedures for handling cash payments (from sale of goods and services, entrance fees, etc.), cash advances and expenditure and cash records.\n* Maintaining 'petty cash' and associated records."
    },
    {
        "Code": "FRM 2.4",
        "Competence Statement": "Conduct procurement and purchasing according to prescribed procedures.",
        "Details": "* Following specified procedures for procuring/purchasing goods and services according to budgets and financial plans and using standard methods.\n* Ensuring all procedures are conducted honestly and transparently.\n* Maintaining accurate records and documentation."
    },
    {
        "Code": "FRM 2.5",
        "Competence Statement": "Identify costs and material requirements for work activities.",
        "Details": "* Accurately calculating/estimating the resource requirements for implementing projects and operational plans.\n* Preparing basic operational budgets and procurement plans.\n* Maintaining accurate records and documentation."
    },
    {
        "Code": "FRM 2.6",
        "Competence Statement": "Ensure availability and maintenance of assets, equipment, stores and supplies.",
        "Details": "* Managing and updating inventories (infrastructure, equipment and supplies).\n* Identifying purchasing, replacement and maintenance needs.\n* Maintaining insurance cover.\n* Maintaining required documentation."
    },
    {
        "Code": "FRM 2.7",
        "Competence Statement": "Manage vehicles and their use.",
        "Details": "* Ensuring appropriate use and maintenance of vehicle fleets (land or water transport).\n* Ensuring that adequate insurance is in place.\n* Ensuring that drivers/users are suitably qualified and trained.\n* Preventing misuse of vehicles.\n* Ensuring that log books and fuel purchases are correctly documented.\n* Dealing with accidents and breakdowns.\n* Identifying purchasing, replacement and maintenance needs."
    },
    {
        "Code": "FRM 3.1",
        "Competence Statement": "Ensure compliance with legislation and required procedures for financial management and use and allocation of resources.",
        "Details": "* Introducing adequate procedures for financial management and management of material assets.\n* Ensuring correct accounting and preventing/addressing all forms of mismanagement or misuse.\n* Ensuring correct management and documentation of material assets (equipment and infrastructure).\n* Ensuring compliance with regulations for managing and reporting income and for taxation.\n* Meeting all requirements for reporting, for audit/inspection and for maintenance of inventory records."
    },
    {
        "Code": "FRM 3.2",
        "Competence Statement": "Prepare a protected area business plan/sustainable financing plan.",
        "Details": "* Developing a budget and medium-term 'business plan' or 'financial sustainability plan' for a PA (linked to a management plan).\n* Identifying available funding and the 'funding gap' between available funds and the requirements of the budget.\n* Identifying strategies and options for filling the funding gap."
    },
    {
        "Code": "FRM 3.3",
        "Competence Statement": "Prepare annual budgets, financing and resourcing plans.",
        "Details": "* Preparing annual/medium-term budgets for a protected area linked to the business plan and/or management plan.\n* Preparing annual plans for income and expenditure to achieve balanced budgets and maintain cash flow.\n* Identifying requirements for recurrent costs, purchases, investments, procurements, etc.\n* Developing budgets and financing plans for projects and grants."
    },
    {
        "Code": "FRM 3.4",
        "Competence Statement": "Direct preparation of financial reports and information required for audits.",
        "Details": "* Preparing annual financial reports according to institutional and legal requirements.\n* Ensuring all information is in place for formal audits."
    },
    {
        "Code": "FRM 3.5",
        "Competence Statement": "Identify and secure funding for protected area management.",
        "Details": "* Presenting justified annual budget requests to parent organisations and funding agencies.\n* Identifying and mobilising new sources of funding for a protected area (e.g. through projects, locally generated income, etc.).\n* Preparing project budgets according to donor requirements.\n* See also PPP 3."
    },
    {
        "Code": "FRM 3.6",
        "Competence Statement": "Identify and secure physical resources required for protected area management.",
        "Details": "* Preparing resource needs assessments based on obligations and needs of a protected area.\n* Identifying requirements for physical infrastructure, materials and equipment and recurrent costs.\n* Identifying where and how to secure the required resources (e.g. through government, external grants, resource sharing, etc.).\n* Overseeing procedures for procurement of goods and services."
    },
    {
        "Code": "FRM 3.7",
        "Competence Statement": "Negotiate and oversee contracts and financial terms for constructions, concessions and management agreements.",
        "Details": "* Contracting for concessions for provision of tourism and recreation services, collection of natural resources, forestry management, etc.\n* Ensuring compliance with all requirements for transparency and fairness in negotiation and awarding of contracts."
    },
    {
        "Code": "FRM 4.1",
        "Competence Statement": "Coordinate mobilisation of funding for protected areas.",
        "Details": "* Preparing financial analyses, long-term financial plans and financial forecasts for the management and expansion of a protected area system.\n* Preparing annual budgets based on rational analysis of management requirements.\n* Identifying funding gaps and shortfalls.\n* Securing adequate/improved central funding for protected areas.\n* Identifying and mobilising potential sources of external funding and support (e.g. from donors, projects, partnerships, etc.). See also PPP 4.\n* Developing new approaches to sustainable PA financing (e.g. tourism charges for entrance and services, fees for resource use, payments for ecosystem services, appeals and campaigns, etc.)."
    },
    {
        "Code": "FRM 4.2",
        "Competence Statement": "Coordinate mobilisation of physical resources for protected areas.",
        "Details": "* Identifying material needs of protected areas across the system (infrastructure, equipment, consumables, etc.).\n* Ensuring that protected areas are adequately resourced according to their needs.\n* Ensuring that resources are inventoried, monitored and maintained.\n* Preparing and presenting justified arguments for investment in a protected area system.\n* Identifying innovative ways to secure adequate resources (e.g. sponsorship, resource sharing, recycling and reusing, etc.)."
    },
    {
        "Code": "FRM 4.3",
        "Competence Statement": "Institute system-wide policies, procedures and norms for financial and resource management.",
        "Details": "* Introducing comprehensive, system-wide financial policies and procedures.\n* Establishing standards for adequate and balanced financing of protected areas.\n* Establishing norms for budgeting, financial planning, management and reporting across a protected area system.\n* Establishing norms for physical resource procurement, management, maintenance and reporting across a protected area system.\n* Introducing measures to prevent and detect financial mismanagement and impropriety."
    },
    {
        "Code": "FRM 4.4",
        "Competence Statement": "Contribute significantly to international initiatives for financing and resourcing protected areas.",
        "Details": "* Making a significant and recognised contribution internationally to PA financing (e.g. through publication of specialist guidance, active membership of an IUCN specialist group, conference presentations, provision of high level training, etc.)."
    },
    {
        "Code": "ADR 1.1",
        "Competence Statement": "Maintain records of work activities.",
        "Details": "* Maintaining records of activity (e.g. through ranger notebooks, timesheets, work records).\n* Using digital record-keeping systems if required (e.g. GPS, SMART)."
    },
    {
        "Code": "ADR 1.2",
        "Competence Statement": "Prepare basic written reports of work activities.",
        "Details": "* Completing required written reports (using prescribed formats).\n* Generating reports from digital devices (if required)."
    },
    {
        "Code": "ADR 2.1",
        "Competence Statement": "Prepare analytical and technical reports and assessments.",
        "Details": "* Researching and preparing written scientific/technical/research reports, including presentation of information, critical analysis of information and preparation of conclusions and recommendations."
    },
    {
        "Code": "ADR 2.2",
        "Competence Statement": "Prepare formal reports of activities and projects.",
        "Details": "Collating and preparing detailed, structured periodic reports of protected area activities, using prescribed structures and formats if needed.\n* For example: quarterly reports from a section or work team, reports to project donors, management plan implementation reports, etc."
    },
    {
        "Code": "ADR 2.3",
        "Competence Statement": "Contribute to and document meetings.",
        "Details": "* Making active and effective contributions to formal and informal meetings.\n* Following protocols and procedures for meetings.\n* Accurately documenting meetings (minute taking)."
    },
    {
        "Code": "ADR 2.4",
        "Competence Statement": "Ensure and maintain accurate and secure documentation of data, activities and events.",
        "Details": "* Ensuring that accurate, retrievable records are kept of work activities, projects, research, administrative procedures, meetings, etc. (digital and/or hard copy records).\n* Ensuring that documentation is secure and backed up.\n* Using electronic record-keeping systems if required.\n* Submitting documentation to central archives and management information systems."
    },
    {
        "Code": "ADR 3.1",
        "Competence Statement": "Compile and prepare formal reports on protected area activities.",
        "Details": "* Compiling comprehensive major reports to managing authorities, donors, partners, etc. (e.g. annual reports, project progress reports).\n* Collating information from a range of sources (internal reports, research reports, evaluations, etc.) into single comprehensive reports."
    },
    {
        "Code": "ADR 3.2",
        "Competence Statement": "Ensure documentation of meetings, consultations and negotiations.",
        "Details": "* Ensuring correct documentation of meetings, agreements and decisions (through minutes, back to office reports, information files, etc.).\n* Ensuring distribution, storage and filing of documentation."
    },
    {
        "Code": "ADR 3.3",
        "Competence Statement": "Ensure that full activity records and documentation are maintained and secured.",
        "Details": "* Ensuring that a protected area maintains a system (electronic and/or paper-based) for recording, storage and retrieval of information, data, activities, maps, images, etc.\n* Establishing a full management information system for a protected area.\n* Ensuring that IT systems are in place and functioning.\n* Ensuring that records are accessible.\n* Ensuring that systems for information security and back up are in place.\n* Meeting data protection and security obligations."
    },
    {
        "Code": "ADR 3.4",
        "Competence Statement": "Implement measures for comprehensive monitoring and reporting on organisational performance.",
        "Details": "* Monitoring of the condition of a protected area, its compliance with its responsibilities and obligations, completion of planned activities, achievement of targets and impact and effectiveness of management.\n* Collecting and compiling reports from sections of a protected area administration.\n* Providing comprehensive reports based on monitoring.\n* Complying with required reporting requirements.\n* Using recognised evaluation systems (e.g. Management Effectiveness Tracking Tool)."
    },
    {
        "Code": "ADR 4.1",
        "Competence Statement": "Compile and prepare formal national and/or international reports on protected area management activities.",
        "Details": "* Leading compilation of major reports on system-wide protected area activities (e.g. to the Government, the CBD, major donors, etc.).\n* Sharing accurate and up-to-date information on protected areas with global data holders (e.g. UNEP WCMC)."
    },
    {
        "Code": "ADR 4.2",
        "Competence Statement": "Ensure effective system level documentation of protected areas, management activities and their effectiveness.",
        "Details": "* Ensuring that comprehensive records of protected areas and all related activities are maintained and updated centrally.\n* Ensuring assessments of management effectiveness are conducted.\n* Enabling availability of records and information.\n* Ensuring that suitable systems of security and back up are in place."
    },
    {
        "Code": "ADR 4.3",
        "Competence Statement": "Contribute significantly to international initiatives for protected area performance monitoring and documentation.",
        "Details": "* Making a significant and recognised contribution internationally to collecting and collating information about protected areas (e.g. through publication of specialist guidance, active membership of an IUCN specialist group, conference presentations, provision of high level training, etc.)."
    },
    {
        "Code": "CAC 1.1",
        "Competence Statement": "Communicate effectively with others in the workplace.",
        "Details": "* Maintaining effective two-way communication with co-workers, supervisors and local stakeholders.\n* Providing clear information, instruction, explanations verbally and in writing.\n* Listening, understanding and assimilating information."
    },
    {
        "Code": "CAC 1.2",
        "Competence Statement": "Provide on-the-job instruction for practical tasks.",
        "Details": "* Instructing and training co-workers how to do required tasks.\n* Providing feedback and support to help colleagues learn and improve their skills."
    },
    {
        "Code": "CAC 1.3",
        "Competence Statement": "Use effective communication techniques to avoid and prevent interpersonal conflict.",
        "Details": "* Using a range of basic techniques to maintain good relations, avoid conflict, reduce tension, resolve arguments and prevent escalation of disputes.\n* Adapting approaches used to different contexts and actors."
    },
    {
        "Code": "CAC 2.1",
        "Competence Statement": "Demonstrate effective interpersonal communication.",
        "Details": "* Demonstrating a range of essential skills for effective formal and informal communication with colleagues, subordinates, stakeholders and partners.\n* Using a range of methods (e.g. face to face, listening, questioning, instructing, providing feedback).\n* Using and understanding non-verbal communication."
    },
    {
        "Code": "CAC 2.2",
        "Competence Statement": "Make effective verbal presentations",
        "Details": "* Preparing and delivering effective verbal presentations in formal and informal settings.\n* Adapting content, materials and presentation styles to different audiences.\n* Keeping to time limits.\n* Making effective use of presentation and visual aids (e.g. PowerPoint)."
    },
    {
        "Code": "CAC 2.3",
        "Competence Statement": "Communicate effectively in writing.",
        "Details": "* Demonstrating a range of skills for effective written communication for various audiences and purposes, using appropriate language and styles for formal reporting, scientific writing, letters and emails.\n* Writing for non-expert audiences."
    },
    {
        "Code": "CAC 2.4",
        "Competence Statement": "Demonstrate effective collaboration and teamwork in the workplace.",
        "Details": "* Promoting inclusive, team-based approaches to work.\n* Encouraging and enabling colleagues and subordinates to contribute to planning and decision making.\n* Delegating tasks and responsibilities.\n* Encouraging and enabling sharing of skills, knowledge and experience.\n* Providing support and feedback."
    },
    {
        "Code": "CAC 2.5",
        "Competence Statement": "Provide mentoring and guidance for colleagues and supervised staff.",
        "Details": "* Providing professional and personal advice and guidance to colleagues and subordinates.\n* Supporting colleagues and subordinates to learn and practice skills."
    },
    {
        "Code": "CAC 2.6",
        "Competence Statement": "Identify and address interpersonal conflicts.",
        "Details": "* Identifying current and potential conflicts and disputes within a protected area organisation, with or between stakeholders.\n* Using a range of approaches and methods to prevent/reduce/avoid conflict and identify solutions."
    },
    {
        "Code": "CAC 2.7",
        "Competence Statement": "Deliver training and learning programmes.",
        "Details": "* Planning and delivering training sessions and courses covering knowledge, understanding and practical skills.\n* Making use of a range of delivery and learning techniques.\n* Assessing performance of trainees and providing feedback."
    },
    {
        "Code": "CAC 2.8",
        "Competence Statement": "Facilitate meetings, discussions and workshops.",
        "Details": "* Using a range of techniques for effective and inclusive facilitation of meetings, workshops and similar events.\n* Making effective use of participatory tools and activities."
    },
    {
        "Code": "CAC 3.1",
        "Competence Statement": "Maintain effective communications within a protected area organisation.",
        "Details": "* Demonstrating effective use of a range of communication techniques in management and direction of a protected area organisation.\n* Making appropriate use of a range of tools and aids to support good communication.\n* Establishing a �culture' within the organisation to promote good communication, transparency and responsiveness.\n* Recognising the diversity of individuals and needs in the organisation and adapting communication approaches accordingly."
    },
    {
        "Code": "CAC 3.2",
        "Competence Statement": "Maintain effective communication and good working relations with stakeholders and partners.",
        "Details": "* Ensuring regular communication and maintenance of positive working relations between a protected area organisation and stakeholders, partners, donors, authorities, etc.\n* Recognising the diversity of individuals and groups among stakeholders and adapting communication approaches accordingly."
    },
    {
        "Code": "CAC 3.3",
        "Competence Statement": "Negotiate agreements and resolve disputes and conflicts.",
        "Details": "* Using a range of techniques for enabling equitable agreements and for resolving major conflicts with/between stakeholders and partners or within the organisation.\n* Ensuring documentation and formalisation of agreements and resolutions."
    },
    {
        "Code": "CAC 4.1",
        "Competence Statement": "Contribute effectively to high level meetings, conferences and negotiations.",
        "Details": "* Participating effectively in high level meetings and conferences.\n* Participating in high level negotiations.\n* Networking and establishing contacts.\n* Ensuring high standards of professionalism, preparation, presentation and observance of protocols."
    },
    {
        "Code": "CAC 4.2",
        "Competence Statement": "Enable effective communication across a protected area system.",
        "Details": "* Enabling regular flows of information from the centre to protected areas and from protected areas to the centre.\n* Enabling regular communication between protected areas (e.g. through staff meetings, circulars, exchange visits, etc.).\n* Developing communities of practice among PA personnel."
    },
    {
        "Code": "CAC 4.3",
        "Competence Statement": "Enable effective communication with other organisations and sectors.",
        "Details": "* Enabling regular networking, communication and information sharing with other major stakeholders for a protected area system.\n* Stakeholders may include other ministries and agencies, local government, other sectors (forestry, agriculture, fisheries, etc.), transboundary protected area partners, national NGOs and citizens' organisations, representatives of indigenous groups, etc.\n* Building partnerships and collaborative initiatives."
    },
    {
        "Code": "CAC 4.4",
        "Competence Statement": "Contribute significantly to international initiatives for improving communication and participation among protected areas.",
        "Details": "* Making a significant and recognised contribution internationally to protected area communication and participation (e.g. through publication of specialist guidance, active membership of an IUCN specialist group, conference presentations, provision of high level training, etc.)."
    },
    {
        "Code": "BIO 1.1",
        "Competence Statement": "Recognise and identify typical ecosystems, habitats, plant and animal species and their signs.",
        "Details": "* Recognising main ecosystems and habitats of a protected area.\n* Recognising common, typical and important species of flora.\n* Recognising common, typical and important species of fauna and their signs in the field."
    },
    {
        "Code": "BIO 1.2",
        "Competence Statement": "Recognise threats and problems affecting biodiversity in the field.",
        "Details": "* Identifying the presence and signs of threats (e.g. invasive species, snares, animal remains, burned areas, etc.).\n* Identifying changes or unusual factors that may indicate threats or problems (e.g. sick animals, dying vegetation).\n* Noting when significant change is taking place."
    },
    {
        "Code": "BIO 1.3",
        "Competence Statement": "Accurately record and report observations of wildlife, habitats and ecosystems.",
        "Details": "* Making verbal reports, taking field notes, using provided recording forms.\n* Recording locations, dates, field conditions, observations and details.\n* Using digital field recording systems (e.g. SMART) if required."
    },
    {
        "Code": "BIO 1.4",
        "Competence Statement": "Assist in the control, capture, handling and transportation of animals.",
        "Details": "* Participating under supervision in conservation-related animal capture or control for relocation, population management or invasive species control."
    },
    {
        "Code": "BIO 1.5",
        "Competence Statement": "Care for captive animals.",
        "Details": "* Supervised day-to-day care of animals in (for example) rescue centres, ex situ conservation facilities, relocation/reintroduction projects.\n* Feeding, recognition of health and welfare problems, maintaining cleanliness and hygiene."
    },
    {
        "Code": "BIO 1.6",
        "Competence Statement": "Care for plants.",
        "Details": "* Supervised day-to-day care of plantations, living botanical collections, tree nurseries, etc."
    },
    {
        "Code": "BIO 2.1",
        "Competence Statement": "Demonstrate a detailed knowledge and understanding of species, habitats and ecosystems of a protected area.",
        "Details": "* Recognising and describing the main ecosystems of a protected area.\n* Knowing and identifying the main species of conservation importance of a protected area; knowing their status, their habitat requirements and the conditions they require for survival.\n* Knowing the threats faced by species of conservation importance and the impacts of those threats."
    },
    {
        "Code": "BIO 2.2",
        "Competence Statement": "Plan, lead and report on biodiversity research, survey and monitoring activities.",
        "Details": "* Organising and conducting field surveys and monitoring assessments of species, habitats, and ecosystems.\n* Identifying survey/monitoring purpose, targets and methods.\n* Identifying and mobilising personnel, equipment, and logistics.\n* Conducting survey/monitoring activities using suitable methods.\n* Collecting specimens in line with laws and best practice guidance.\n* Collating, analysing and presenting results.\n* Making practical recommendations for improving management practice."
    },
    {
        "Code": "BIO 2.3",
        "Competence Statement": "Plan, lead and report on resource use surveys and monitoring programmes.",
        "Details": "* Conducting assessments of the use of natural resources in a PA.\n* Identifying survey/monitoring purpose, targets and methods.\n* Identifying and mobilising personnel, equipment, and logistics.\n* Collaborating with resource users to gather information.\n* Collating, analysing and presenting results.\n* Making practical recommendations for improving management practice."
    },
    {
        "Code": "BIO 2.4",
        "Competence Statement": "Propose justified measures for conservation of species.",
        "Details": "Using survey, monitoring and research results to prepare evidence-based recommendations for conservation of important species.\n* Preparing detailed management prescriptions for inclusion in management plans, project proposals, etc.\n* Ensuring that recommendations are science- and evidence-based and/or based on established traditional knowledge and experience."
    },
    {
        "Code": "BIO 2.5",
        "Competence Statement": "Propose justified measures for conservation of habitats and ecosystems.",
        "Details": "* Using survey, monitoring and research results to prepare informed and rational recommendations for conservation, restoration, management and threat reduction of important ecosystems and habitats.\n* Preparing detailed management prescriptions for inclusion in management plans, project proposals, etc.\n* Ensuring that recommendations are scientific and evidence-based and/or based on established traditional knowledge and experience."
    },
    {
        "Code": "BIO 2.6",
        "Competence Statement": "Propose justified measures for sustainable use of natural resources.",
        "Details": "* Using survey, monitoring and research results, and working with user groups to propose informed and rational recommendations for sustainable use.\n? Preparing detailed management recommendations and prescriptions\nfor inclusion in management plans, project proposals, etc."
    },
    {
        "Code": "BIO 2.7",
        "Competence Statement": "Plan, lead and report on implementation of biodiversity conservation measures.",
        "Details": "* Conservation measures include any justified measures identified through a PA management plan, species action plans or other planning process to conserve and manage biodiversity assets.\n* Identifying and mobilising personnel, equipment, and logistics.\n* Ensuring that the plan is followed in the field and that conservation measures are correctly implemented.\n* Monitoring and reporting on the implementation and effectiveness of measures."
    },
    {
        "Code": "BIO 2.8",
        "Competence Statement": "Plan, lead and report on animal capture, transport, care and management.",
        "Details": "Organising and leading safe and humane capture of animals using appropriate techniques (e.g. darting, trapping, hand collecting, etc.).\n* Reasons for animal capture include research, translocation and rescue.\n* Providing and monitoring of adequate conditions of safety and welfare for holding and transportation of captive animals."
    },
    {
        "Code": "BIO 2.9",
        "Competence Statement": "Plan, lead and report on animal control measures.",
        "Details": "* Culling or controlling pest species, invasive species, harvested species, problem animals, species requiring population management, in line with an approved plan and in a safe, legal and ethical manner.\n* Methods may include permitted forms of trapping, euthanasia, shooting, poisoning (e.g. of invasive rodents), etc."
    },
    {
        "Code": "BIO 2.10",
        "Competence Statement": "Plan, lead and report on the care and use of cultivated plants.",
        "Details": "* Supervision and care of plantations, living botanical collections, tree nurseries, etc.\n* Plant establishment, care, watering, pest and weed control, protection, etc.\n* Using cultivated plants for restoration, rehabilitation and creation of habitats and ecosystems."
    },
    {
        "Code": "BIO 2.11",
        "Competence Statement": "Curate collections and museums.",
        "Details": "* Supervising and curating collections of biodiversity specimens, exhibits and herbaria (at PAs that include a zoological museum, herbarium or other collection).\n* Maintaining catalogues and records.\n* Assisting users of the collection."
    },
    {
        "Code": "BIO 3.1",
        "Competence Statement": "Direct biodiversity survey, research and monitoring programmes.",
        "Details": "* Leading the development and implementation of programmes of management-oriented survey, research and monitoring for a PA that:\n - focus on prioritised biodiversity assets;\n - are management oriented; and\n - make use of accepted best practice and appropriate techniques."
    },
    {
        "Code": "BIO 3.2",
        "Competence Statement": "Direct measures for protection/recovery of fauna species of conservation importance.",
        "Details": "* Identifying species of conservation importance in a protected area.\n* Leading the development and implementation of appropriate and justified measures for in situ conservation of focal species.\n* Monitoring and reporting on the results of management measures and the status of focal species.\n* Incorporating the measures into the overall management strategy/plan for a protected area."
    },
    {
        "Code": "BIO 3.3",
        "Competence Statement": "Direct measures for conservation of habitats and ecosystems of conservation importance.",
        "Details": "* Identifying ecosystems, habitats and landscapes of conservation importance in a protected area.\n* Leading the development and implementation of justified measures for conservation of important habitats and ecosystems.\n* Monitoring and reporting on the results of management measures and status of focal habitats and ecosystems.\n* Incorporating the measures into the overall management strategy/plan for a protected area."
    },
    {
        "Code": "BIO 3.4",
        "Competence Statement": "Direct measures for addressing threats from alien invasive species.",
        "Details": "* Identifying the threats (current and potential) posed by alien invasive species (AIS) to a protected area.\n* Leading the development and implementation of justified measures for addressing the threats and impacts arising from alien invasive species in a protected area.\n* Identifying the main measures required to prevent/reduce impact.\n* Monitoring and reporting on the results of management measures.\n* Incorporating the measures into the overall management strategy/plan for a protected area."
    },
    {
        "Code": "BIO 3.5",
        "Competence Statement": "Direct programmes for sustainable harvesting of natural resources.",
        "Details": "*  Identifying resources suitable for sustainable use.\n* Leading the development and implementation of justified programmes for sustainable use, in collaboration with harvesters/users.\n* Agreeing parameters for use and developing regulations (e.g. harvesting techniques and periods, quotas, means of monitoring and assessing impact).\n* Specifying different approaches for subsistence, local and commercial harvesting.\n* Monitoring and reporting on the results and impacts of harvesting.\n* Incorporating the measures into the overall management strategy/plan for a protected area."
    },
    {
        "Code": "BIO 3.6",
        "Competence Statement": "Direct programmes for resolving human-wildlife conflict.",
        "Details": "* Working with those affected to develop practical and sustainable solutions to problems such as crop raiding, livestock predation, animal pests, dangerous animals.\n* Monitoring and reporting on the results and impacts of management measures.\n* Incorporating the measures into the overall management strategy/plan for a protected area."
    },
    {
        "Code": "BIO 3.7",
        "Competence Statement": "Contribute to national conservation status evaluations.",
        "Details": "* Taking a significant and active role in the development and updating of national, regional or global Red Lists, species status assessments, ecosystem assessments (or equivalent)."
    },
    {
        "Code": "BIO 3.8",
        "Competence Statement": "Direct the curation and management of specimens and collections.",
        "Details": "* Developing/applying procedures and protocols to ensure that collection of biological material is conducted legally and ethically and respects the rights of legal and traditional custodians.\n* Ensuring that specimens and collections are correctly curated.\n* Ensuring that collection, storage and movement of specimens complies with national law and international agreements."
    },
    {
        "Code": "BIO 3.9",
        "Competence Statement": "Direct ex  situ animal conservation programmes.",
        "Details": "*  Leading the development and implementation of programmes for ex situ conservation of species, making use of recognised best practice and guidance.\n* Including capture, transportation, welfare, husbandry, planned breeding programmes and veterinary care.\n* Facilities may include rescue centres, breeding centres, conservation zoos associated with PAs."
    },
    {
        "Code": "BIO 3.10",
        "Competence Statement": "Direct animal reintroduction projects.",
        "Details": "*�������� Leading the planning and implementation of projects for animal reintroduction and/or population reinforcement.\n* Ensuring that projects conform to international best practice guidance from the IUCN Reintroduction Specialist Group.\n* Monitoring the success and effects of the programme."
    },
    {
        "Code": "BIO 3.11",
        "Competence Statement": "Direct ex situ plant conservation projects.",
        "Details": "* Leading the development and implementation of programmes for ex situ plant conservation, making use of recognised best practice and guidance.\n* Including collection and storage of plant materials, cultivation and propagation.\n* Facilities may include gene banks, collections, arboreta, cultivation and breeding plots."
    },
    {
        "Code": "BIO 3.12",
        "Competence Statement": "Direct ecosystem and habitat restoration projects",
        "Details": "* Leading the development and implementation of programmes for major habitat and ecosystem restoration, rehabilitation or creation.\n* Including (as required) physical landscaping, soil stabilisation, establishment and care of vegetation, reintroduction of plant species, hydrological engineering, etc."
    },
    {
        "Code": "BIO 4.1",
        "Competence Statement": "Coordinate development of national polices, strategies and legislation for biodiversity conservation and protected areas.",
        "Details": "* Reviewing existing policies and legislation for biodiversity conservation.\n* Identifying national priorities for biodiversity conservation.\n* Providing guidance and inputs to development of policy and legislation for improving protection and management of biodiversity."
    },
    {
        "Code": "BIO 4.2",
        "Competence Statement": "Coordinate national programmes for research, survey and monitoring related to biodiversity.",
        "Details": "* Identifying biodiversity information gaps and research priorities for a protected area system.\n* Developing partnerships with research institutions.\n* Directing development of national/regional research and monitoring programmes.\n* Contributing to analysis and publication of research results.\n* Disseminating results of research to support management of protected areas."
    },
    {
        "Code": "BIO 4.3",
        "Competence Statement": "Coordinate national strategies, plans and activities for species conservation and recovery.",
        "Details": "* Identifying species of conservation importance nationally and within a protected area network.\n* Developing strategies and plans for the conservation of threatened species on national/international/regional scales (in situ/ex situ).\n* Ensuring that protected areas contribute to implementing the plans.\n* Monitoring implementation of plans."
    },
    {
        "Code": "BIO 4.4",
        "Competence Statement": "Coordinate national plans and activities for addressing threats from alien invasive species in a protected area system.",
        "Details": "* Developing strategies and plans to address the threat from alien invasive species (AIS).\n* Ensuring that protected areas contribute to implementation of the plans.\n* Monitoring implementation of plans."
    },
    {
        "Code": "BIO 4.5",
        "Competence Statement": "Coordinate national plans and activities for ecosystem/habitat conservation, restoration and rehabilitation.",
        "Details": "* Identifying ecosystems, habitats and landscapes of conservation importance.\n* Developing plans for the conservation, rehabilitation/restoration or creation of important habitats and ecosystems in protected areas.\n* Setting targets for habitat and ecosystem conservation.\n* Ensuring that protected areas contribute to  implementing the plans.\n* Monitoring implementation of plans."
    },
    {
        "Code": "BIO 4.6",
        "Competence Statement": "Coordinate national plans and activities for resource use in protected areas.",
        "Details": "* Developing policies and plans for resource use in protected areas, including local collection (e.g. NTFPs), traditional management (e.g. grazing), commercial use (e.g. forestry, fish harvesting).\n* Working at the national level to develop use limits and agreements.\n* Ensuring that protected areas contribute to  implementing the plans.\n* Monitoring implementation of plans."
    },
    {
        "Code": "BIO 4.7",
        "Competence Statement": "Contribute significantly to international initiatives for conservation of species, habitats and ecosystems.",
        "Details": "* Actively participating in relevant international initiatives or groups (e.g. IUCN Species Survival Commission Specialist Groups, global reviews or strategies, etc.)."
    },
    {
        "Code": "LAR 1.1",
        "Competence Statement": "Identify signs and evidence of unauthorised activities and security threats in the field.",
        "Details": "* Recognising and identifying signs and evidence relevant to the threats and legal issues faced by a protected area.\n* For example: signs of illegal logging (cut stumps, sawmill sites, extraction routes, chainsaw noise); poaching (different types of snare and trap, gunshots, remains of poached animals); use of poisons; unauthorised access, unauthorised resource use; unexploded ordnance; security threats (incursions, traps, potential confrontations)."
    },
    {
        "Code": "LAR 1.2",
        "Competence Statement": "Provide information to protected area users about laws, rights and regulations affecting a protected area.",
        "Details": "* Providing verbal information and guidance about laws and regulations to stakeholders (local residents, visitors, tourists, authorised users, violators).\n* Explaining and answering questions."
    },
    {
        "Code": "LAR 1.3",
        "Competence Statement": "Participate in supervised law enforcement operations in compliance with standard operating procedures.",
        "Details": "* Following correct procedures for typical law enforcement operations: (information gathering, inspections, patrols, searches, checkpoints, raids) legally and in accordance with instructions and relevant standard operating procedures (SOPs)."
    },
    {
        "Code": "LAR 1.4",
        "Competence Statement": "Follow legal, ethical and safe procedures for apprehending suspects, violators and detainees.",
        "Details": "* Apprehending, detaining or arresting suspects (if permitted) legally, ethically and in accordance with instructions and established procedures.\n* Taking steps to ensure apprehension by law enforcement personnel (e.g. police) if required.\n* Respecting the rights of suspects and the general public."
    },
    {
        "Code": "LAR 1.5",
        "Competence Statement": "Follow correct procedures for protecting crime scenes and for seizing, securing and documenting evidence.",
        "Details": "* Securing crime scenes in order to enable detailed documentation and investigations.\n* Preserving, collecting and documenting evidence related to violations, legally and in accordance with instructions and established procedures."
    },
    {
        "Code": "LAR 1.6",
        "Competence Statement": "Treat suspects and members of the public correctly and legally during law enforcement activities.",
        "Details": "* Ensuring that all contacts with suspects, local people and the general public are conducted legally, professionally and respectfully.\n* Refraining from and preventing mistreatment of the public and of suspects.\n* Refraining from and preventing corrupt behaviour."
    },
    {
        "Code": "LAR 1.7",
        "Competence Statement": "Follow correct procedures for basic documenting and reporting on law enforcement activities.",
        "Details": "* Providing accurate verbal and written reports according to the law and to prescribed procedures.\n* Using digital aids for recording information in the field if required (e.g. handheld computers, smart phones, applications such as SMART and FIST)."
    },
    {
        "Code": "LAR 1.8",
        "Competence Statement": "Provide formal evidence (written and verbal).",
        "Details": "* Providing accurate written statements and accounts.\n* Providing accurate and reliable verbal evidence in official investigations and court procedures."
    },
    {
        "Code": "LAR 1.9",
        "Competence Statement": "Respond correctly to non-violent disputes and confrontations.",
        "Details": "* Using a range of non-violent, legal and ethical techniques for avoiding conflict and defusing hostile situations (e.g. dealing with disputes, threats, non-cooperation or intimidation).\n* Techniques may include: using correct language, using and reading body language, showing good listening skills, providing clear and consistent responses, staying calm under provocation, and knowing when to withdraw and when to summon assistance.\n* Following instructions and standard operating procedures in threatening situations."
    },
    {
        "Code": "LAR 1.10",
        "Competence Statement": "Respond correctly and appropriately to physical threats and attacks.",
        "Details": "* Use of self-defence techniques, equipment and appropriate force in response to physical attacks.\n* Following instructions and use of standard operating procedures in threatening situations and physical confrontations."
    },
    {
        "Code": "LAR 1.11",
        "Competence Statement": "Care for and use firearms legally, correctly and safely.",
        "Details": "* Checking, maintaining, safely handling and storing firearms and ammunition according to established rules and procedures.\n* Using firearms to prevent or respond to life threatening attacks by wildlife or people according to the law and standard procedures.\n* Cooperating in investigations and reporting following use of firearms."
    },
    {
        "Code": "LAR 2.1",
        "Competence Statement": "Gather information to support law enforcement and security operations.",
        "Details": "* Gathering information from a range of sources: evidence collected from the field; analysis of patrol and law enforcement data (using tools such as GIS, SMART, etc.); collaboration with other law enforcement agencies, the public and stakeholders; use of informants.\n* Collating and reporting on information and evidence collected."
    },
    {
        "Code": "LAR 2.2",
        "Competence Statement": "Lead and report on crime prevention/law enforcement operations in the field.",
        "Details": "* Organising, supervising and monitoring crime prevention/law enforcement operations conducted by ranger teams, community teams or other partners (patrols, inspections, checkpoints, etc.).\n* Leading crime prevention/law enforcement teams in the field safely and according to plans and established rules and procedures.\n* Ensuring that law enforcement personnel are fully conversant with relevant operating procedures."
    },
    {
        "Code": "LAR 2.3",
        "Competence Statement": "Work with local communities to resist and prevent illegal activities.",
        "Details": "* Providing information and guidance to stakeholders concerning laws and regulations.\n* Working with stakeholders to identify their concerns regarding threats, security and other issues.\n* Developing contacts and relations with local communities to cooperate in law enforcement.\n* Using a range of �soft� techniques to encourage and enable behaviour change and cooperation.\n* Responding to requests for law enforcement and security support from local stakeholders."
    },
    {
        "Code": "LAR 2.4",
        "Competence Statement": "Ensure effective and legal apprehension of suspects and violators.",
        "Details": "* Ensuring that procedures for detaining, searching or arresting suspects are followed correctly and that their rights are fully respected.\n* Ensuring that law enforcement personnel are fully conversant with relevant operating procedures.\n* Securing the support and cooperation of law enforcement agencies in apprehending and detaining suspects."
    },
    {
        "Code": "LAR 2.5",
        "Competence Statement": "Question and secure statements from suspects and witnesses effectively and legally.",
        "Details": "* Using a range of legal and appropriate techniques to gather information from detainees, suspects and witnesses.\n* Taking full and detailed notes of interviews.\n* Following correct procedures for taking written statements and for recording interviews.\n* Ensuring that rights are fully respected."
    },
    {
        "Code": "LAR 2.6",
        "Competence Statement": "Manage crime scenes and seized evidence using correct procedures.",
        "Details": "* Ensuring that correct procedures are followed for: searches of people, vehicles, property, baggage; securing crime scenes; preserving evidence at the scene; noting and collecting evidence; recording, labelling, storage and retrieval of evidence (written and physical).\n* Ensuring that law enforcement personnel are fully conversant with relevant operating procedures."
    },
    {
        "Code": "LAR 2.7",
        "Competence Statement": "Process legal cases related to violations.",
        "Details": "Pursuing cases through all the required stages (formal reporting of events, follow up investigations, collecting further evidence, securing witness testimony, presenting a case, providing formal testimony).\n* Collaborating with law enforcement agencies and the judiciary."
    },
    {
        "Code": "LAR 2.8",
        "Competence Statement": "Conduct complex investigations into environmental crime and/or security threats.",
        "Details": "* Gathering evidence using a range of means (e.g.: working with informants and ensuring their security; conducting covert observation and information gathering; conducting trade chain investigations outside a protected area).\n* Collaborating with law enforcement authorities."
    },
    {
        "Code": "LAR 2.9",
        "Competence Statement": "Address major security threats in the field.",
        "Details": "* Ensuring the security of staff, local stakeholders and visitors against physical threats.\n* Identifying security threats, developing threat reduction/response procedures for personnel, staff and stakeholders.\n* Providing instruction and guidance and ensuring procedures are followed."
    },
    {
        "Code": "LAR 2.10",
        "Competence Statement": "Ensure that correct procedures are followed for use of firearms.",
        "Details": "* Ensuring that correct and legally required procedures are complied with for all aspects of firearms use (e.g. registration of firearms, storage of arms and ammunition, maintenance and checking, training and certification of authorised users, issuing of firearms and ammunition, correct use, observance of standard operating procedures and rules of engagement, reporting and documentation of incidents).\n* Providing a high level of training and supervision."
    },
    {
        "Code": "LAR 2.11",
        "Competence Statement": "Deploy and use remote surveillance equipment.",
        "Details": "* Effectively deploying and gathering information using equipment such as unmanned aerial vehicles, automatic cameras, radar, balloons, shot detectors, metal detectors, etc."
    },
    {
        "Code": "LAR 3.1",
        "Competence Statement": "Direct the development and implementation of a strategy, plan and operating procedures for protected area law enforcement.",
        "Details": "* Developing a comprehensive strategy for upholding laws and regulations in a protected area.\n* Identifying the main threats and issues affecting a protected area that require law enforcement/crime prevention activity.\n* Identifying the perpetrators and beneficiaries of crime, and the main victims.\n* Consulting over options for dealing with violations with other agencies, and local communities.\n* Identifying the approaches and methods to be used for law enforcement/crime prevention/encouraging compliance.\n* Identifying requirements for improved legal regulations.\n* Identifying opportunities to engage local communities to support crime prevention and law enforcement.\n* Developing standard operating procedures (or adapting national procedures) for law enforcement activities.\n* Incorporating the results of the planning process into the overall management strategy/plan for a protected area."
    },
    {
        "Code": "LAR 3.2",
        "Competence Statement": "Direct preparation and implementation of security assessments and strategies.",
        "Details": "* Identifying the main security threats to PA personnel, stakeholders and visitors (e.g. violence, intimidation, coercion, unexploded ordnance, presence of violent groups and individuals).\n* Developing responses to the threats and plans and procedures for dealing with major security emergencies.\n* Allocating adequate resources for law enforcement and providing comprehensive support for front line rangers.\n* Implementing special measures to ensure the safety and security of vulnerable personnel (rangers and other staff, local communities, informants, etc.)."
    },
    {
        "Code": "LAR 3.3",
        "Competence Statement": "Direct law enforcement and crime prevention operations.",
        "Details": "* Developing detailed operational plans for effective law enforcement/crime prevention in line with an overall strategy and based on intelligence and analysis of previous activities.\n* Ensuring that operations are professionally and responsibly led, conducted and documented.\n* Directing the legal follow-up to law enforcement activities to ensure that all correct procedures are followed.\n* Coordinating with local communities to ensure that they are involved and informed and that issues that concern them are being addressed.\n* Collecting and collating reports and statistics and reporting on overall implementation of activities."
    },
    {
        "Code": "LAR 3.4",
        "Competence Statement": "Coordinate law enforcement and security activities with other responsible agencies and with the judiciary.",
        "Details": "Ensuring coordination of law enforcement related activities with police, military, forest guards, border guards, etc.\n* Enabling active collaboration (e.g. through information sharing, joint patrols, joint investigations, etc.).\n* Ensuring that judiciary are informed about the crime issues related to a protected area and their impacts."
    },
    {
        "Code": "LAR 3.5",
        "Competence Statement": "Direct the development of local regulations and by-laws for activities in a protected area.",
        "Details": "* Consulting over the need for local rules and regulations.\n* Drafting and obtaining approval for local rules and regulations (where possible) with appropriate authorities."
    },
    {
        "Code": "LAR 3.6",
        "Competence Statement": "Direct major investigations into environmental crime and/or security threats.",
        "Details": "* Directing complex investigations over a long period, including: directing the work of field staff; working with informants and ensuring their security; collecting and examining a range of intelligence and evidence; liaising with other agencies; identifying and investigating instigators, intermediaries and trade chains.\n* Ensuring confidentiality and security of operations.\n* Analysing and preparing reports and recommendations."
    },
    {
        "Code": "LAR 4.1",
        "Competence Statement": "Coordinate analyses of law enforcement, compliance, crime prevention and security issues affecting biodiversity and protected areas.",
        "Details": "* Reviewing current policies and legislation related to environmental crime and law enforcement.\n* Reviewing and analysing system-wide threats and trends related to law enforcement (e.g. organised environmental crime, international wildlife trade).\n* Conducting security and threat assessments for protected areas.\n* Reviewing and analysing system-wide results of law enforcement and compliance activities.\n* Identifying patterns, trends, successes and challenges."
    },
    {
        "Code": "LAR 4.2",
        "Competence Statement": "Coordinate national policies, strategies, laws and regulations for addressing environmental crime and security threats.",
        "Details": "* Proposing new, and strengthening existing policies and legal instruments for protecting species, ecosystems, protected areas and the environment.\n* Proposing new, and strengthening existing policies and legal instruments for law enforcement, security compliance and crime prevention in protected areas.\n* Lobbying for increased attention to wildlife and environment crime and imposition of appropriate penalties."
    },
    {
        "Code": "LAR 4.3",
        "Competence Statement": "Coordinate development and implementation of standards and operating procedures for law enforcement, crime prevention and security in a protected area system.",
        "Details": "* Working with law enforcement authorities, PA directors, managers and stakeholders to identify and develop priorities, strategies and approaches.\n* Developing norms, standards and operating procedures and ensuring that protected areas adopt them.\n* Ensuring that responses to illegal activities are legal, appropriate and ethical.\n? Allocating adequate resources for law enforcement and providing comprehensive support for front line rangers.\n* Ensuring provision of training and equipment for law enforcement personnel."
    },
    {
        "Code": "LAR 4.4",
        "Competence Statement": "Coordinate law enforcement strategies and operations with other agencies.",
        "Details": "* Working with the judiciary and with national agencies for law enforcement and security to enforce legislation regarding biodiversity and protected areas.\n* Agencies may include police, border guards, military and security services.\n* Establishing mechanisms for joint operations and exchange of information.\n* Establishing mechanisms for international and transboundary cooperation."
    },
    {
        "Code": "LAR 4.5",
        "Competence Statement": "Contribute significantly to development of international policy and/or legal responses to major threats affecting biodiversity and protected areas.",
        "Details": "* Participating in international initiatives against wildlife and environmental crime (e.g. through organisations such as CITES, TRAFFIC, etc.)."
    },
    {
        "Code": "COM 1.1",
        "Competence Statement": "Communicate and interact appropriately with local community members.",
        "Details": "* Demonstrating awareness of and sensitivity to local cultures and practices.\n* Complying with policies and guidance on relations with local people.\n* Providing basic information to local people about a protected area, its functions, regulations and approaches for working with local communities.\n* Demonstrating awareness of and sensitivity to cultural issues in all aspects of work.\n* See also CAC Level 1, FPC."
    },
    {
        "Code": "COM 1.2",
        "Competence Statement": "Conduct extension field work with local communities.",
        "Details": "* Working under supervision on practical joint implementation of community outreach and extension activities.\n* Relevant activities include basic surveys, agriculture, construction, health and welfare, sustainable use, education, etc.\n* Working in a participatory, inclusive and sensitive manner.\n* Recording and reporting on activities and results."
    },
    {
        "Code": "COM 2.1",
        "Competence Statement": "Maintain productive and equitable working relationships with local communities and indigenous peoples.",
        "Details": "* Maintaining regular formal and informal contact with communities.\n* Building and maintaining constructive working relationships with local leaders and influential people.\n* Understanding and addressing differences of opinion and potential conflicts.\n* Participating actively and constructively in meetings, workshops and community events.\n* Coordinating and facilitating community engagement activities and events."
    },
    {
        "Code": "COM 2.2",
        "Competence Statement": "Plan, lead and report on cultural and socio-economic surveys and assessments.",
        "Details": "* Identifying survey/monitoring purpose, targets and methods.\n* Identifying and mobilising personnel, equipment, and logistics.\n* Collecting information on communities, local forms of governance, social conditions, livelihoods, resource use, culture, etc.\n* Collating, analysing and presenting results.\n* Making practical recommendations for improving management practice."
    },
    {
        "Code": "COM 2.3",
        "Competence Statement": "Facilitate and support agreements for community-based sustainable use of natural resources.",
        "Details": "* Working with communities, user groups and conservation specialists to negotiate agreements and regulations for sustainable resource use compatible with the conservation objectives of a protected area.\n* Monitoring and implementation of agreements and observance of regulations.\n* See also BIO 2.6."
    },
    {
        "Code": "COM 2.4",
        "Competence Statement": "Facilitate and support establishment of community development projects.",
        "Details": "Enabling access for communities to specialist knowledge, advice and support (e.g. access to extension services, advice on sustainable harvesting, information on projects and programmes, sources of funding and credit, welfare services, educational services, credit facilities, etc.).\n* Supporting establishment of compatible development activities identified by/with local communities."
    },
    {
        "Code": "COM 2.5",
        "Competence Statement": "Facilitate and support establishment of community-based economic enterprises.",
        "Details": "* Working with communities to establish and operate social and environmental enterprises compatible with the objectives of a protected area (for example tourism services, processing/sale of sustainably harvested resources, provision of local services, etc.)."
    },
    {
        "Code": "COM 2.6",
        "Competence Statement": "Plan, lead and report on measures to safeguard cultural and historic sites, structures and artefacts.",
        "Details": "* Conducting participatory surveys and assessments of cultural artefacts and �immovable� heritage (archaeological and historic features and locations) within a protected area.\n* Working with local communities to propose measures for the management and protection of important elements of immovable and/or portable heritage."
    },
    {
        "Code": "COM 2.7",
        "Competence Statement": "Plan lead and report on measures to safeguard intangible cultural heritage.",
        "Details": "* Conducting participatory surveys and assessments of �intangible heritage� (traditions, skills, arts, designs, oral history, etc.) of local communities.\n* Working with local communities to propose measures to safeguard intangible heritage."
    },
    {
        "Code": "COM 3.1",
        "Competence Statement": "Direct the participatory collection and assessment of socio-economic and cultural information.",
        "Details": "* Ensuring that a protected area administration has an adequate knowledge and understanding of local and indigenous communities.\n* Working with specialists in community-based research and assessment.\n* Ensuring that information gathering is participatory and respectful of the beliefs and traditions of local and indigenous peoples.\n* Working with local communities to identify and where possible quantify impacts (positive and negative) of a protected area on local communities and of local communities on a protected area."
    },
    {
        "Code": "COM 3.2",
        "Competence Statement": "Direct development of a strategy and plan for engagement by a protected area with local communities.",
        "Details": "* Preparing a detailed strategy and plan for community engagement by a protected area, developed with full participation of local stakeholders.\n* Identifying appropriate mechanisms for local communities to participate in PA planning, management and monitoring.\n* Identifying agreed forms of co management, devolved management, establishment of buffer zones, community conserved zones, etc.\n* Identifying joint plans, projects or proposals for activities that benefit PA communities and a protected area.\n* Incorporating the plan into the overall management strategy/plan for a protected area.\n* Communicating the strategy and plan to PA staff and local stakeholders."
    },
    {
        "Code": "COM 3.3",
        "Competence Statement": "Enable participation of communities in protected area governance and management.",
        "Details": "* Instituting mechanisms for regular communication and consultation with local communities.\n* Ensuring formal representation of local communities in relevant meetings, workshops, planning and decision making bodies and processes.\n* Ensuring inclusion of groups such as indigenous peoples, local minorities, young people, women, and those disadvantaged or underrepresented for various reasons."
    },
    {
        "Code": "COM 3.4",
        "Competence Statement": "Negotiate and maintain formal agreements with communities.",
        "Details": "* Participatorily negotiating and agreeing formal agreements (e.g. permit and licensing schemes, management and resource use rights, limits and quotas, boundaries and use zones, buffer zones, revenue generation and benefit sharing schemes, etc.).\n* Recognising traditional rights."
    },
    {
        "Code": "COM 3.5",
        "Competence Statement": "Ensure that protected area management activities respect policies and agreements and the rights of communities.",
        "Details": "* Ensuring that PA policies and procedures take into consideration community rights, needs and agreements.\n* Ensuring that PA staff are aware of and observe the rights of local communities and relevant policies and agreements.\n* Observing principles of free prior informed consent, in particular with respect to relocation and resettlement.\n* Taking appropriate action to prevent and address problems and incidents."
    },
    {
        "Code": "COM 3.6",
        "Competence Statement": "Facilitate activities that support sustainable socio-economic development of communities.",
        "Details": "* Promoting development activities for and by local communities that are compatible with the other objectives of a protected area.\n* Enabling sharing of benefits derived from a protected area with local communities.\n* Enabling access by PA communities to assistance, support and finance for development projects, enterprise development, sustainable use, etc.\n* Promoting and enabling establishment of local networks and organisations."
    },
    {
        "Code": "COM 3.7",
        "Competence Statement": "Promote and support the cultural identity and traditional knowledge and practices of local communities.",
        "Details": "* Acknowledging and making use of traditional knowledge, experience, forms of management and decision making and other 'intangible heritage'.\n* Proactively encouraging and supporting local traditional practices compatible with PA objectives (e.g. architectural styles, languages. handicrafts, land and resource management practices, cultural events)."
    },
    {
        "Code": "COM 3.8",
        "Competence Statement": "Ensure the protection of sites, features and objects of cultural importance.",
        "Details": "* Introducing specific programmes for the protection, preservation or restoration of important cultural sites and of �immoveable' and 'moveable' heritage.\n* Working with local communities in cultural site protection and management (e.g. for spiritual sites)."
    },
    {
        "Code": "COM 4.1",
        "Competence Statement": "Enable formal recognition of the roles, rights and needs of local and indigenous communities in and around protected areas.",
        "Details": "* Ensuring that the rights and interests of local communities and indigenous peoples (LCs and IPs) are adequately reflected in policies, laws, regulations and procedures relevant to protected areas.\n* Promoting formal recognition of the roles, rights and needs of LCs and IPs (e.g. through legislation, policies for a protected area system, negotiated agreements with indigenous and community groups, etc.).\n* Promoting the adoption of the principles of free prior informed consent.\n* Promoting compliance with international conventions and other agreements."
    },
    {
        "Code": "COM 4.2",
        "Competence Statement": "Enable integration of the needs and rights of local and indigenous communities into governance and management of protected areas.",
        "Details": "* Coordinating assessments of the status, needs and rights of local and indigenous communities in and around protected areas.\n* Ensuring that PA management authorities respect laws and regulations affecting local communities and indigenous peoples and their rights of access to and use of resources (including consideration of traditional laws, rights and knowledge).\n* Organising related training and awareness programmes for protected area decision makers and staff and for local communities.\n* Enabling establishment of community conserved areas/zones.\n* Mobilising resources to support community support and development in and around PAs."
    },
    {
        "Code": "COM 4.3",
        "Competence Statement": "Institutionalise formal participation of local communities in governance and management of protected areas.",
        "Details": "* Actively encouraging and enabling appropriate forms of participatory governance of protected areas (e.g. through establishing a range of PA categories and management systems that enable community support and participation, formalising mechanisms for participatory governance, supporting PA directors to establish participatory governance, recognising Community Conserved Areas, etc.)\n* Enabling access for PA personnel and local communities to information, guidance, training and support for improved governance."
    },
    {
        "Code": "COM 4.4",
        "Competence Statement": "Coordinate initiatives to support the fair and equitable sharing of benefits arising from the use of genetic resources (access and benefit sharing).",
        "Details": "* Coordinating assessments of the current situation concerning access and benefit sharing.\n* Establishing national legislation, regulations and processes for access and benefit sharing.\n* Supporting protected area managers in the local application of access and benefit sharing mechanisms.\n* Organising relevant training and awareness programmes for protected area decision makers and staff."
    },
    {
        "Code": "COM 4.5",
        "Competence Statement": "Contribute significantly to international initiatives for improving engagement of local and indigenous communities in protected area management.",
        "Details": "* Making a significant and recognised contribution internationally  to the positive engagement of indigenous peoples and local communities in protected area management (e.g. through publication of specialist guidance, active membership of an IUCN specialist group, conference presentations, provision of high level training, etc.)."
    },
    {
        "Code": "TRP 1.1",
        "Competence Statement": "Welcome, assist and regulate visitors on site.",
        "Details": "* Giving directions, providing basic advice to visitors about recreation opportunities, safety, permitted and prohibited activities.\n* Responding correctly and accurately to questions and complaints.\n* Responding correctly to violations of codes and regulations and inappropriate behaviour."
    },
    {
        "Code": "TRP 1.2",
        "Competence Statement": "Respond to emergencies and accidents to visitors.",
        "Details": "* Following procedures for reporting and responding to accidents, emergencies and other problems affecting visitors to a protected area."
    },
    {
        "Code": "TRP 1.3",
        "Competence Statement": "Guide basic visitor activities.",
        "Details": "* Leading correctly and safely basic 'face to face' (non-hazardous, non-specialist) recreation activities (e.g. guided walks, nature trails, short hikes, tours of exhibitions, etc.).\n* Providing appropriate information and assistance to participants."
    },
    {
        "Code": "TRP 1.4",
        "Competence Statement": "Operate entrance, ticketing and sales facilities.",
        "Details": "* Operating entrance points, sales points.\n* Correctly following procedures for sales, ticketing, cash handling, etc."
    },
    {
        "Code": "TRP 1.5",
        "Competence Statement": "Assist in guiding advanced visitor activities.",
        "Details": "* Assisting in leading potentially hazardous recreation activities requiring special technical equipment and skills (e.g. long distance hiking, water-based activities, climbing, zip line, etc.).\n* Observation of all safety requirements.\n* Providing appropriate information and assistance to participants."
    },
    {
        "Code": "TRP 2.1",
        "Competence Statement": "Manage visitation and use of facilities.",
        "Details": "* Ensuring that visitor activities and experiences offered by a protected area (and contractors, partners and franchise holders) are conducted to a high standard (quality of experience, safety, supervision, etc.).\n* Ensuring day-to-day management of facilities (entrance gates, information centres, car parks, retail outlets, trails, washrooms, play areas, etc.).\n* Supervising personnel responsible for operating facilities and leading visitor activities (guides, interpreters, recreation rangers, reception personnel).\n* Reporting problems and solving them where possible.\n* Maintaining records and preparing reports."
    },
    {
        "Code": "TRP 2.2",
        "Competence Statement": "Manage needs and behaviour of visitors.",
        "Details": "* Ensuring that visitors are well informed, comply with regulations, and are well regulated/supervised.\n* Supervising and supporting guides and tourism staff who work directly with visitors.\n* Dealing with problems related to visitors (conflicts, emergencies, accidents, breaches of regulations, etc.)."
    },
    {
        "Code": "TRP 2.3",
        "Competence Statement": "Monitor and manage the impacts (environmental and social) of visitation.",
        "Details": "* Identifying actual and potential impacts of tourism and recreation on the environment and social values of a protected area.\n* Monitoring and reporting on impacts using appropriate indicators and methods. See also BIO 2.\n* Specifying responses and remedial actions to address impacts."
    },
    {
        "Code": "TRP 2.4",
        "Competence Statement": "Conduct surveys about visitors, the use of a protected area and its facilities.",
        "Details": "* Collecting and analysing quantitative and qualitative data about public use and about visitors using a range of suitable methods.\n* Providing regular reports on visitation and use.\n* Making recommendations based on survey results."
    },
    {
        "Code": "TRP 2.5",
        "Competence Statement": "Manage and lead specialised and hazardous recreation activities.",
        "Details": "* Organising and leading advanced/specialised/hazardous recreation activities (e.g. example rafting, mountaineering, cross country skiing, snorkelling).\n* Ensuring that all requirements for safety are in place and complied with.\n* Supervising guides and other personnel."
    },
    {
        "Code": "TRP 2.6",
        "Competence Statement": "Manage visitor accommodation.",
        "Details": "* Managing guesthouses, hostels, campsites, etc. operated by a protected area administration or its partners.\n* Ensuring provision of good standards of accommodation, facilities, hygiene and service.\n* Organising bookings, logistics, billing, etc."
    },
    {
        "Code": "TRP 2.7",
        "Competence Statement": "Manage catering (food service) for visitors.",
        "Details": "* Preparing and providing good quality meals, snacks, refreshments, etc. for visitors.\n* Ensuring adequate facilities and equipment are in place.\n* Ensuring laws and regulations regarding food service and hygiene are observed.\n* Supervising catering staff."
    },
    {
        "Code": "TRP 2.8",
        "Competence Statement": "Manage sales activities and retail outlets.",
        "Details": "* Managing facilities involving sales of goods and/or services to visitors (shops, ticketing points, cafes, hostels, etc.).\n* Maintaining required documentation of sales.\n* Cash handling and/or processing of credit cards.\n* Managing inventory/ordering, etc.\n* Supervising sales staff."
    },
    {
        "Code": "TRP 3.1",
        "Competence Statement": "Direct development of a strategy and plan for tourism, recreation and public use in a protected area.",
        "Details": "* Preparing a detailed strategy and plan for sustainable and economically viable tourism and recreation in a protected area.\n* Conducting market analysis, identifying opportunities, demand, target groups, suitable activities, infrastructure and equipment needs, limits, zones, impacts, visitor management requirements, etc.\n* Identifying potential partnerships and opportunities for PA communities and local businesses to invest in, participate in and benefit from tourism and visitation.\n* Communicating the strategy and plan to PA staff and local stakeholders.\n* Incorporating the plan into the overall management strategy/plan for a protected area."
    },
    {
        "Code": "TRP 3.2",
        "Competence Statement": "Direct establishment and maintenance of appropriate facilities, equipment and infrastructure for visitors.",
        "Details": "* Establishing and maintaining the infrastructure required for general visitation (access, parking, visitor reception, information centres, service infrastructure, etc.).\n* Establishing and maintaining specific facilities and equipment required for a range of recreation activities appropriate to a protected area.\n* Identifying sources of funding for infrastructure development (government funds, projects, investors, etc.).\n* Ensuring that facilities, installations and equipment are well constructed, safe, appropriate in scale and design and have minimal environmental impact."
    },
    {
        "Code": "TRP 3.3",
        "Competence Statement": "Direct development of business plans, budgets and fee structures for visitor services and activities.",
        "Details": "* Identifying the financial costs and benefits of tourism and recreation provision.\n* Identifying personnel requirements and competences.\n* Preparing budgets and financial forecasts.\n* Ensuring that tourism initiatives and enterprises are viable.\n* Defining entry fees, user fees, concession fees, etc."
    },
    {
        "Code": "TRP 3.4",
        "Competence Statement": "Ensure that visitors have safe, well-managed, informative and enjoyable visits.",
        "Details": "* Assuring the quality of the visitor experience and a high standard of visitor management by personnel, concessionaires and service providers.\n* Ensuring safety, security and compliance with regulations of visitors, personnel and service providers.\n* Introducing safety standards and codes of conduct for visitors, staff and service providers and for hazardous activities.\n* Ensuring that personnel/service providers are adequately trained and competent.\n* Ensuring collection and reporting of feedback and data about public use."
    },
    {
        "Code": "TRP 3.5",
        "Competence Statement": "Ensure monitoring and management of the impacts of public use.",
        "Details": "* Identifying/predicting/monitoring negative environmental impacts of public use of a protected area (e.g. killing and disturbance of wildlife, habitat damage, erosion, waste, pollution, vandalism, pest species).\n* Identifying/predicting/monitoring social and cultural impacts of public use of a protected area (e.g. erosion of local cultures, unfair competition with local businesses, behaviours and practices unacceptable to local sensitivities, etc.)\n* Developing suitable solutions (in collaboration with users and local stakeholders) for elimination or reduction of impacts.\n* Introducing limits on activity on the basis of carrying capacity and/or limits of acceptable change."
    },
    {
        "Code": "TRP 3.6",
        "Competence Statement": "Ensure marketing of opportunities for tourism, recreation and public use.",
        "Details": "* Working with government agencies and the private sector to market and promote a protected area as a destination.\n* Collaborating in marketing with other attractions and service providers.\n* Organising direct marketing through publicity, internet, media, etc."
    },
    {
        "Code": "TRP 3.7",
        "Competence Statement": "Establish partnerships and agreements with communities and businesses for tourism and recreation.",
        "Details": "* Taking positive steps to encourage and enable local people and businesses to add to and benefit from the recreation offering of a protected area (e.g. through for the supply of goods and services to visitors and operation of recreation sites and activities).\n* Negotiating concessions/franchises/agreements for the operation of facilities and provision of services."
    },
    {
        "Code": "TRP 4.1",
        "Competence Statement": "Coordinate development of a national policy and strategy for public use, tourism and recreation in and around protected areas.",
        "Details": "* Analysing the legal and regulatory frameworks for tourism.\n* Identifying types of tourism and recreation activity appropriate to and incompatible with protected areas.\n* Developing a national strategy, guidance, norms and standard operating procedures for public access and activities in PAs."
    },
    {
        "Code": "TRP 4.2",
        "Competence Statement": "Enable provision of appropriate opportunities for sustainable public use, tourism and recreation across a protected area system.",
        "Details": "* Ensuring establishment of PAs in categories that allow tourism and recreation.\n* Supporting PA directors to develop appropriate tourism, recreation and public use facilities, opportunities and programmes.\n* Promoting the benefits of responsible tourism in PAs, for PA managers, local communities and local economies.\n* Enabling access for PA personnel to information, guidance, training, advice, projects, etc.\n* Enabling partnerships with the tourism sector for development and marketing of appropriate tourism facilities, services and products."
    },
    {
        "Code": "TRP 4.3",
        "Competence Statement": "Promote protected areas as destinations for public use, sustainable tourism and recreation.",
        "Details": "* Working with national authorities, agencies and the private sector to develop, market and promote tourism opportunities in protected areas.\n* Ensuring that a protected area system is included in national plans and policies for tourism marketing."
    },
    {
        "Code": "TRP 4.4",
        "Competence Statement": "Contribute significantly to international initiatives for developing sustainable tourism and recreation in and around protected areas.",
        "Details": "* Making a significant and recognised contribution internationally to tourism and recreation in PAs (e.g. through publication of specialist guidance, active membership of an IUCN specialist group, conference presentations, provision of high level training, etc.)."
    },
    {
        "Code": "AWA 1.1",
        "Competence Statement": "Provide basic information about a protected area.",
        "Details": "* Providing basic verbal explanations to visitors and stakeholders about a protected area (values, functions, regulations, wildlife, culture, features and locations of interest, recreation opportunities).\n* Responding appropriately to questions.\n* See also CAC."
    },
    {
        "Code": "AWA 1.2",
        "Competence Statement": "Make basic interpretive/educational presentations.",
        "Details": "* Preparing and delivering basic interpersonal interpretive/educational presentations to a range of audiences based on a planned schedule or script.\n* For example, leading an interpretive trail, making a presentation to a community group, guiding visitors around a visitor centre, conducting an activity with a school group, briefing visitors on regulations of a protected area, etc."
    },
    {
        "Code": "AWA 2.1",
        "Competence Statement": "Plan, lead and report on interpretive, awareness and educational programmes.",
        "Details": "* Developing and leading an appropriate, diverse and effective range of interpretive, awareness and educational messages and activities based on the communication strategy of a protected area.\n* Supervising and building capacity of awareness personnel.\n* Managing and maintaining awareness facilities (e.g. visitor centres, museums, interpretive trails, etc.).\n* Conducting assessments of the effectiveness and impact of awareness activities."
    },
    {
        "Code": "AWA 2.2",
        "Competence Statement": "Plan and lead 'person to person' awareness and educational activities.",
        "Details": "* Planning, preparing and leading interpersonal presentations (lectures, guided walks, educational events, etc.).\n* Identifying and researching target audiences, themes and messages.\n* Identifying suitable interpretive opportunities and techniques.\n* Preparing �scripts� and formats for the activities.\n* Preparing required �props�, audio-visual aids and other materials.\n* See also CAC."
    },
    {
        "Code": "AWA 2.3",
        "Competence Statement": "Plan, draft and oversee production of publications, exhibits and signs.",
        "Details": "* Developing concepts and text for printed publications, panels, educational and interactive displays (indoor and outdoor), web pages, etc.\n* Identifying and researching target audiences, themes and messages.\n* Drafting and editing suitable text.\n* Identifying needs for graphics, photos, etc.\n* Preparing briefs for designers and working with them and printers/producers to prepare the finished product."
    },
    {
        "Code": "AWA 2.4",
        "Competence Statement": "Plan, oversee production of and operate technology-based exhibits.",
        "Details": "* Developing concepts for technology driven displays and activities (e.g. films, audio visual presentations, touch screen displays, interactive exhibits).\n* Working with specialists to design, build and install exhibits.\n* Operating and maintaining exhibits."
    },
    {
        "Code": "AWA 2.5",
        "Competence Statement": "Plan and lead special public events.",
        "Details": "* Planning and overseeing all aspects of special events at a protected area (design, budgeting, marketing, logistics, advertising, organisation).\n* For example, open days, special activity days, formal openings and launches, entertainment events."
    },
    {
        "Code": "AWA 2.6",
        "Competence Statement": "Plan and deliver formal education activities.",
        "Details": "* Developing programmes, lesson plans, teaching materials, etc. linked to formal educational curricula (at primary, intermediate, high school or university levels).\n* Assessing curricula, researching and designing programmes, identifying learning objectives.\n* Working with teachers/educators.\n* Delivering and assessing lessons and learning activities."
    },
    {
        "Code": "AWA 2.7",
        "Competence Statement": "Manage and maintain internet and social media presence for a protected area.",
        "Details": "* Working with specialists to design and develop websites, social media pages, blogs, etc. and to establish an online presence (see also TEC 2).\n* Maintaining and updating online presence and interacting effectively with users."
    },
    {
        "Code": "AWA 2.8",
        "Competence Statement": "Work with the media to communicate information and stories about a protected area.",
        "Details": "Identifying media stories, messages and opportunities.\n* Conducting press, radio and TV interviews.\n* Organising media events and working with media groups (film crews, media tours, etc.).\n* Disseminating information for the media (press releases, online announcements, etc.).\n* Maintaining records of media coverage."
    },
    {
        "Code": "AWA 3.1",
        "Competence Statement": "Direct development of a protected area communication strategy and plan.",
        "Details": "* Identifying main themes and messages for visibility, interpretation, education and awareness.\n* Identifying target groups (e.g. visitors, local communities, schools and educational institutions, other resource use sectors).\n* Identifying suitable methods and media for communicating messages to target groups.\n* Preparing programmes of awareness, interpretation and education.\n* Identifying personnel requirements and competences.\n* Communicating the strategy and plan to PA staff and local stakeholders.\n* Incorporating the plan into the overall management strategy/plan for a protected area."
    },
    {
        "Code": "AWA 3.2",
        "Competence Statement": "Direct development of a protected area image and brand.",
        "Details": "* Working with specialists to develop a unique image and brand for use in awareness raising and marketing of a protected area.\n* Developing an image and logo for a protected area.\n* Developing consistent standards for design of protected area facilities and publications, etc."
    },
    {
        "Code": "AWA 3.3",
        "Competence Statement": "Direct the design, production and deployment of awareness and educational facilities and installations.",
        "Details": "* Working with designers, architects, staff and stakeholders to specify the functions, design and layout of interpretive and educational facilities (e.g. educational and awareness centres).\n* Designing and installing signage systems for the site.\n* Overseeing the construction of facilities and installations."
    },
    {
        "Code": "AWA 3.4",
        "Competence Statement": "Direct the design and production of awareness and educational materials.",
        "Details": "* Working with designers to produce attractive and effective interpretive, awareness and educational materials (leaflets, signs, posters, displays, audiovisual installations, etc.).\n* Overseeing development of concepts, scripts, designs, drafts, etc.\n* Overseeing production of materials."
    },
    {
        "Code": "AWA 3.5",
        "Competence Statement": "Direct the design and implementation of interpretive and educational programmes.",
        "Details": "* Directing the specification, planning, design and implementation of a diverse programme of awareness, interpretational and educational activities, based on the strategy and plan.\n* Working with partners to deliver education, awareness and interpretation in appropriate ways for identified target groups including local communities, schools, visitors, decision makers.\n* Ensuring evaluation of the impact and effectiveness of the programmes."
    },
    {
        "Code": "AWA 3.6",
        "Competence Statement": "Direct the design and implementation of local issue-based/advocacy campaigns.",
        "Details": "Identifying topics, issues, target audiences and messages for campaigns.\n* Designing and coordinating campaigns involving a range of media and techniques."
    },
    {
        "Code": "AWA 3.7",
        "Competence Statement": "Develop and implement a protected area media strategy.",
        "Details": "* Developing a detailed strategy for working with the media to promote a protected area, and explain problems, conflicts and controversial issues.\n* Maintaining constructive relations with the media."
    },
    {
        "Code": "AWA 4.1",
        "Competence Statement": "Coordinate development of a strategy for visibility, awareness and education across a protected area system.",
        "Details": "* Developing a national image for a system of PAs.\n* Identifying key audiences, messages and media for awareness and education.\n* Developing a national strategy, guidance and standards for communication, awareness, interpretation, education and design."
    },
    {
        "Code": "AWA 4.2",
        "Competence Statement": "Promote national awareness and understanding of a protected area system and its values.",
        "Details": "* Explaining, representing and maintaining the profile of a PA system through events, media work, participation in conferences, policy fora, campaigns, etc.\n* Coordinating national awareness campaigns focusing on protected areas.\n* Establishing mechanisms for dialogue and information exchange between protected area officials, stakeholders, relevant sectors and civil society.\n* Presenting detailed arguments and justifications for government and sectoral support of PAs and biodiversity."
    },
    {
        "Code": "AWA 4.3",
        "Competence Statement": "Promote the inclusion of protected area and biodiversity issues in educational curricula.",
        "Details": "* Promoting inclusion of PA/biodiversity issues into educational curricula at all levels.\n* Enabling access by educational authorities to information and materials for curriculum development.\n* Promoting development of university and college courses and curricula in applied conservation and protected area management."
    },
    {
        "Code": "AWA 4.4",
        "Competence Statement": "Contribute significantly to international initiatives for improving awareness, education and information related to protected areas.",
        "Details": "* Making a significant and recognised contribution internationally to protected area education and awareness (e.g. through publication of specialist guidance, active membership of an IUCN specialist group, conference presentations, provision of high level training, etc.)."
    },
    {
        "Code": "FLD 1.1",
        "Competence Statement": "Use map and compass/charts for orientation and navigation.",
        "Details": "* Reading a topographic map or sea chart.\n* Using a compass and map/chart for orientation and navigation in the field.\n* See FLD 1.2 for use of GPS."
    },
    {
        "Code": "FLD 1.2",
        "Competence Statement": "Use a Global Positioning System (GPS) for orientation and navigation.",
        "Details": "* Care and maintenance of GPS.\n* Using GPS in the field for basic functions (orientation, tracking, recording waypoints, location, etc.).\n* Setting up GPS and downloading/uploading routes and waypoints, etc."
    },
    {
        "Code": "FLD 1.3",
        "Competence Statement": "Follow good safety and environmental practice in the field and the work place.",
        "Details": "* Behaving in an environmentally responsible manner. For example: not smoking, avoiding alcohol, safe management of campfires, quiet behaviour, avoiding environmental damage, not hunting, appropriate disposal of waste and garbage.\n* Behaving in a safely conscious manner. For example: correct use of tools and equipment, awareness of risks and hazards, complying with instructions and regulations, avoiding reckless behaviour, use of correct safely equipment, fire awareness."
    },
    {
        "Code": "FLD 1.4",
        "Competence Statement": "Safely use and maintain hand tools and equipment.",
        "Details": "* Safely and correctly using and caring for non-powered equipment (tools, materials, etc.).\n* Correctly using and caring for safety and protective equipment."
    },
    {
        "Code": "FLD 1.5",
        "Competence Statement": "Safely operate and maintain power tools and machinery with small engines.",
        "Details": "* Safely and correctly using machinery with engines or electric motors (e.g. brush cutters, mowers, chainsaws, power tools, etc.).\n* Following maintenance procedures.\n* Correctly using safety and protective equipment."
    },
    {
        "Code": "FLD 1.6",
        "Competence Statement": "Complete basic construction tasks.",
        "Details": "* Safe and durable installation and maintenance of trails, boardwalks, bridges, fences, signs, picnic areas, camping grounds, mooring buoys and other basic infrastructure required by a protected area.\n* Using wood, basic masonry, local materials, etc."
    },
    {
        "Code": "FLD 1.7",
        "Competence Statement": "Complete basic landscaping, horticultural and silvicultural tasks.",
        "Details": "* Correctly completing practical hard and soft landscaping tasks (e.g. habitat creation, erosion control, drainage, vegetation control, tree planting and aftercare, wetland maintenance, etc.)."
    },
    {
        "Code": "FLD 1.8",
        "Competence Statement": "Set up and operate field camps.",
        "Details": "* Organising overnight accommodation in the field (camps, bivouacs, ranger stations, etc.).\n* Deploying required equipment.\n* Establishing and maintaining good standards of safety and hygiene.\n* Managing preparation of meals.\n* Setting up latrines and washing facilities."
    },
    {
        "Code": "FLD 1.9",
        "Competence Statement": "Conduct first aid and provide appropriate responses in accidents and emergencies.",
        "Details": "* Obtaining Red Cross, Red Crescent or equivalent basic first aid skills (adapted to the specific needs of a protected area).\n* Procedures for reporting accidents and dealing with casualties.\n* Advanced first aid (where required)."
    },
    {
        "Code": "FLD 1.10",
        "Competence Statement": "Correctly use and care for basic field surveying instruments.",
        "Details": "* Correctly using and caring for basic instruments regularly used in the field (binoculars, telescope, camera, measuring equipment, etc.)."
    },
    {
        "Code": "FLD 1.11",
        "Competence Statement": "Drive and conduct basic maintenance for motor vehicles.",
        "Details": "* Acquiring a driving permit/licence.\n* Driving safely and responsibly.\n* Conducting routine required checks and operator maintenance."
    },
    {
        "Code": "FLD 1.12",
        "Competence Statement": "Operate and conduct basic maintenance for motor powered boats.",
        "Details": "* Acquiring a boat use permit/licence.\n* Operating boats safely and responsibly.\n* Conducting routine required checks and operator maintenance."
    },
    {
        "Code": "FLD 1.13",
        "Competence Statement": "Detect, prevent, fight and control fires.",
        "Details": "* Maintaining fire watches and following procedures for reporting fires.\n* Following prescribed procedures (under supervision) for avoiding fire risks, fire prevention (e.g. clearing firebreaks), dealing with wildfires.\n* Safe and correct operation of fire-fighting and control equipment."
    },
    {
        "Code": "FLD 1.14",
        "Competence Statement": "Work safely in aquatic environments.",
        "Details": "* Swimming competently.\n* Crewing of small craft.\n* Using safety equipment."
    },
    {
        "Code": "FLD 1.15",
        "Competence Statement": "Dive using SCUBA equipment.",
        "Details": "* Diving safely using SCUBA equipment.\n* Acquiring a recognised SCUBA qualification."
    },
    {
        "Code": "FLD 1.16",
        "Competence Statement": "Correctly use and maintain field communication equipment.",
        "Details": "* Using radio or other electronic communication equipment (handset, smart phone, base station).\n* Maintaining equipment (batteries, chargers, etc.).\n* Using required procedures/protocols for communication."
    },
    {
        "Code": "FLD 1.17",
        "Competence Statement": "Care for and work with draft animals and/or livestock.",
        "Details": "* Ensuring welfare and safety of animals in the field (feeding, watering, checking, responding to health and welfare issues).\n* May apply to any draft animal used to assist PA work (horses, donkeys, mules, camels, buffalo, etc.) or to livestock used in conservation management (e.g. sheep or cattle for sustainable grazing)."
    },
    {
        "Code": "FLD 2.1",
        "Competence Statement": "Plan, lead and report on field excursions and activities.",
        "Details": "* Planning all logistical aspects of field trips, expeditions, patrols, etc.\n* Ensuring that transport, food, camping, field equipment and safety arrangements are suitable for the number of participants and the duration and purpose of the field trip.\n* Leading field trips and ensuring welfare and safety of participants.\n* Monitoring activities and preparing reports."
    },
    {
        "Code": "FLD 2.2",
        "Competence Statement": "Maintain stores of field equipment and supplies.",
        "Details": "* Ensuring secure storage and maintenance of equipment, materials and supplies for field work.\n* Maintaining systems of signing out/signing in for equipment and supplies.\n* Maintaining inventory records and requesting replenishment of equipment and supplies (see also FRM 2)."
    },
    {
        "Code": "FLD 2.3",
        "Competence Statement": "Plan, lead and report on small scale construction, landscaping and maintenance works.",
        "Details": "* Planning and organising correct installation of non-engineered structures (e.g. boundary markers, paths, trails, rest areas, picnic sites, garbage disposal and associated structures).\n* Planning and organising physical and landscaping works as required (e.g. erosion control, drainage works, tree planting).\n* Interpreting drawings and specifications.\n* Specifying and obtaining required materials and equipment.\n* Supervising correct and safe construction and maintenance.\n* Maintaining schedules of checks and maintenance of facilities (paths, trails, constructions).\n* Specifying maintenance and repair requirements."
    },
    {
        "Code": "FLD 2.4",
        "Competence Statement": "Plan, lead and report on search and rescue and emergency response.",
        "Details": "* Organising search parties, logistics and procedures.\n* Organising evacuation of casualties.\n* Coordinating with emergency services and other search and rescue teams.\n* Using special techniques according to the conditions of a protected area (e.g. mountainous, aquatic).\n* Preparing reports and required documentation."
    },
    {
        "Code": "FLD 2.5",
        "Competence Statement": "Plan, lead and report on waste management and pollution control.",
        "Details": "* Organising regular waste collection and management activities.\n* Organising special waste collection and site cleaning actions.\n* Monitoring potential pollution sources in a protected area (e.g. waste dumps, fuel stores, sewage and waste water, use of chemicals, etc.).\n* Responding to pollution incidents."
    },
    {
        "Code": "FLD 2.6",
        "Competence Statement": "Plan, lead and report on fire prevention and control activities.",
        "Details": "* Planning fire prevention and control activities.\n* Organising and supervising fire watches.\n* Maintaining fire breaks, signage and other preventative measures.\n* Maintaining firefighting equipment.\n* Leading teams in the field to fight and control wildfires.\n* Complying with required operational and safety procedures.\n* Coordinating with other firefighting services.\n* Preparing reports and required documentation."
    },
    {
        "Code": "TEC 1.1",
        "Competence Statement": "Operate and maintain computers for basic offline functions (word processing, data entry, file management).",
        "Details": "* Using basic offline applications for word processing and entering data.\n* Storing and retrieving data on computers and networks.\n* Uploading, downloading and saving data (e.g. from GPS or other mobile technology).\n* Using common peripherals (printer, scanner, projector, etc.).\n* Basic maintenance of hardware and software.\n* Using available platforms (e.g. Mac, PC, Smartphone, tablet, etc.).\n* Using common peripherals (printer, scanner, projector etc.).\n* Basic maintenance of hardware and software.\n* Using digital field recording systems (e.g. SMART). \n* May apply to most relevant type of platform (Mac, PC, Tablet, Smartphone etc.)."
    },
    {
        "Code": "TEC 1.2",
        "Competence Statement": "Use online and other connected communication equipment and media.",
        "Details": "* Using online/connected electronic equipment and media for communicating and gathering information (internet, email, SMS, smartphone, etc.).\n* Using social media."
    },
    {
        "Code": "TEC 1.3",
        "Competence Statement": "Operate and maintain audio visual equipment.",
        "Details": "* Using cameras, recorders, mobile phones, video equipment to record images and sound.\n* Processing and storing recorded data and images."
    },
    {
        "Code": "TEC 2.1",
        "Competence Statement": "Operate and maintain computers for advanced functions.",
        "Details": "* Using and managing databases, apps, spread sheets and other commonly used applications and peripherals.\n* Using local networks and servers.\n* Solving common problems and conducting regular maintenance and updates (hardware and software).\n* Ensuring secure use of IT (virus checking, updating software, backing up, etc.).\n* Using and maintaining peripherals (printers, scanners, plotters, etc.)\n* Using available platforms (PC, Mac, Tablet, Smartphone, etc.)."
    },
    {
        "Code": "TEC 2.2",
        "Competence Statement": "Use online technology for advanced functions.",
        "Details": "Using online tools and services for data collection, sharing and management, awareness and visibility, communication, collaboration, etc.\n* Using social media, web sites, online questionnaires, online databases, etc.\n* Using and maintaining online connections and related peripherals."
    },
    {
        "Code": "TEC 2.3",
        "Competence Statement": "Manage and maintain IT systems and networks.",
        "Details": "* Overseeing management and maintenance of IT systems and equipment and providing support to users.\n* Ensuring maintenance, upgrading, etc. of computers and peripherals.\n* Ensuring availability, registration and updating of software.\n* Ensuring correct functioning and operation of computer networks.\n* Developing standards and protocols for IT and network use.\n* Maintaining central servers.\n* Ensuring data security (virus checks, firewalls, back up, updates, etc.)."
    },
    {
        "Code": "TEC 2.4",
        "Competence Statement": "Manage and maintain digital data and information resources.",
        "Details": "* Managing and updating databases (for example of wildlife records, visitor records, law enforcement management information, statistics, etc.) using generic or specialised applications.\n* Providing reliable access to data for analysis and use to support planning and management."
    },
    {
        "Code": "TEC 2.5",
        "Competence Statement": "Operate Geographic Information Systems (GIS) and related applications.",
        "Details": "* Operating GIS packages for day-to-day use.\n* Adding spatial information.\n* Analysing information.\n* Preparing maps and reports.\n* NOTE: this competence relates to operating and updating existing GIS systems, not to establishing, programming and customising GIS systems."
    },
    {
        "Code": "TEC 2.6",
        "Competence Statement": "Use advanced technology to support protected area management.",
        "Details": "* Operating and maintaining specialist technological aids according to specific needs and available technology. For example:\n* Advanced uses of GIS for modelling, spatial analysis, optimisation, etc.;\n* Remote monitoring and tracking technology for monitoring wildlife, visitors, threats, etc.;\n* New technologies such as solar installations, UV waste treatment;\n* Audio visual presentations and interactive installations in visitor centres; and\n* Devices and applications for data collection in the field."
    },
    {
        "Code": "FPC 01",
        "Competence Statement": "Demonstrate a positive personal attitude to work.",
        "Details": "* Maintaining good time keeping.\n* Completing tasks in a timely and competent manner.\n* Demonstrating willingness to learn and develop personally.\n* Taking the initiative and working constructively."
    },
    {
        "Code": "FPC 02",
        "Competence Statement": "Work in compliance with instructions, briefings, laws, regulations and procedures.",
        "Details": "* Demonstrating awareness of and compliance with requirements of the employer and the job.\n* Paying attention to information, guidance and instructions.\n* Demonstrating awareness of regulations governing activities, health, safety, welfare, etc."
    },
    {
        "Code": "FPC 03",
        "Competence Statement": "Demonstrate a flexible and adaptable approach to work.",
        "Details": "* Responding constructively and adapting to changing circumstances, problems and changing priorities and workloads.\n* Adopting a positive attitude to new technologies, tools and working practices."
    },
    {
        "Code": "FPC 04",
        "Competence Statement": "Maintain good relations with others in the workplace.",
        "Details": "* Treating stakeholders, co-workers, subordinates and supervisors professionally and respectfully.\n* Communicating effectively with others.\n* Actively participating in team work and collaborative activities."
    },
    {
        "Code": "FPC 05",
        "Competence Statement": "Communicate effectively verbally.",
        "Details": "* Providing clear, correct and appropriate person to person information, explanations, instructions and responses.\n* Demonstrating ability to listen and absorb communication from others.\n* Demonstrating awareness of non-verbal aspects (body language, modes of expression, etc.)."
    },
    {
        "Code": "FPC 06",
        "Competence Statement": "Demonstrate basic literacy (reading and writing).",
        "Details": "* Providing clear simple written accounts of activities.\n* Understanding written guidance and instructions."
    },
    {
        "Code": "FPC 07",
        "Competence Statement": "Demonstrate basic numeracy.",
        "Details": "* Measuring and counting.\n* Conducting basis arithmetic calculations.\n* Using calculators."
    },
    {
        "Code": "FPC 08",
        "Competence Statement": "Demonstrate awareness of and sensitivity to cultural, ethnic, gender and ability issues.",
        "Details": "* Awareness of and respect for diversity issues.\n* Appropriate treatment of co-workers, stakeholders, visitors, etc. in all aspects of work."
    },
    {
        "Code": "FPC 09",
        "Competence Statement": "Maintain good practice for security, safety and environmental protection in the work place and in the field.",
        "Details": "* Demonstrating environmental responsibility in the workplace.\n* For example: conserving energy, preventing pollution, reducing fire risks, minimising and managing waste, recycling, minimising damage and disturbance to a protected area during work.\n* See also FLD."
    },
    {
        "Code": "FPC 10",
        "Competence Statement": "Avoid, prevent and report dishonest and/or illegal practices.",
        "Details": "* Taking steps to avoid and prevent illegal activity, corruption, collusion, nepotism, breaches of confidentiality.\n* Reporting illegal and corrupt practices.\n* Maintaining confidentiality of information when required."
    },
    {
        "Code": "FPC 11",
        "Competence Statement": "Maintain personal health, hygiene and fitness.",
        "Details": "* Paying attention to keeping fit and healthy.\n* Managing stress.\n* Following good practice for health and hygiene in relation to self and others."
    },
    {
        "Code": "FPC 12",
        "Competence Statement": "Communicate in other languages and/or dialects.",
        "Details": "* Communicating (speaking/understanding/reading/writing) in locally used languages and/or international languages (as required)."
    },
    {
        "Code": "APC 01",
        "Competence Statement": "Demonstrate analytical skills.",
        "Details": "*  Processing, summarising and interpreting large amounts of information/data.\n* Breaking down complex information into small parts.\n* Identifying patterns, common factors, inconsistencies and gaps.\n* Developing rational conclusions, hypotheses, recommendations and supporting arguments."
    },
    {
        "Code": "APC 02",
        "Competence Statement": "Address complex problems.",
        "Details": "* Taking a positive approach to dealing with problems.\n* Dealing with problems in a rational and systematic way.\n* Developing and exploring alternative approaches and strategies for problem solving.\n* Exploring creative and innovative solutions to problems."
    },
    {
        "Code": "APC 03",
        "Competence Statement": "Make effective decisions.",
        "Details": "* Working strategically towards defined goals.\n* Identifying best courses of action based on analysis of alternatives, rational assessments and experience.\n* Consulting with and listening to others when making decisions.\n* Assessing the effectiveness and impact of decisions.\n* Taking responsibility for decisions made.\n* Learning from successes, mistakes and failures and adapting plans and activities accordingly."
    },
    {
        "Code": "APC 04",
        "Competence Statement": "Cope with hazardous working environments.",
        "Details": "* Being aware of hazards and risks associated with the working environment.\n* Observing strictly risk reduction plans, procedures and measures.\n* Avoiding and preventing reckless and impulsive actions.\n* Learning and rehearsing emergency responses and procedures.\n* Prioritising safety and welfare of people."
    },
    {
        "Code": "APC 05",
        "Competence Statement": "Work effectively under pressure.",
        "Details": "* Demonstrating efficient time management and multi-tasking skills.\n* Prioritising and delegating tasks in order to balance workloads.\n* Persevering in times of difficulty and adversity and remaining calm and in control.\n* Recognising the signs of stress and �burnout� (in oneself and others).\n* Adopting measures for dealing with/reducing personal stress."
    },
    {
        "Code": "APC 06",
        "Competence Statement": "Make best use of limited resources.",
        "Details": "* Adopting creative approaches to implementing plans with limited resources (human, financial, technical).\n* Being economical and avoiding waste and unnecessary use of resources.\n* Seeking low cost, sustainable solutions."
    },
    {
        "Code": "APC 07",
        "Competence Statement": "Adopt a positive attitude to learning and personal development.",
        "Details": "* Seeking and learning new information and skills and learning from others.\n* Pursuing personal and professional development opportunities.\n* Being an active participant in training and learning activities.\n* Engaging in �non-formal� learning activities such as mentoring and communities of practice."
    },
    {
        "Code": "APC 08",
        "Competence Statement": "Demonstrate commitment to transparency and participation.",
        "Details": "* Adopting an open and inclusive approach to work.\n* Sharing information openly wherever possible.\n* Being transparent about decisions and decision making.\n* Identifying and engaging stakeholders with an interest in resources, plans and decisions.\n* Being approachable and accessible to colleagues and stakeholders."
    },
    {
        "Code": "APC 09",
        "Competence Statement": "Enable and encourage team work.",
        "Details": "* Developing and motivating teams and encouraging teamwork.\n* Ensuring that team members understand their roles and tasks.\n* Creating a �team spirit� and common purpose.\n* Encouraging sharing of ideas, creative and critical thinking."
    },
    {
        "Code": "APC 10",
        "Competence Statement": "Support and encourage individuals.",
        "Details": "* Listening to others and providing constructive advice and criticism.\n* Supporting colleagues and staff in times of stress and difficulty.\n* Delegating tasks to people with the appropriate skills.\n* Providing mentoring and coaching support and encouraging others to learn and develop."
    }
];


// module.exports = competences;module.exports = competences;

/********Josephs Competency Offline Object JS Code Start******/