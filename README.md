The Imobapp FullStack application to manage a Real State company. This repository is the Frontend engine (see the backend in here: https://github.com/gabrielsacampos/imobapp) built with NextJs (ReactJs) and fully styled and responsive by using Tailwindcss.

For now, we are on processes to consume API from backend with GET methods to build dashboards to company agents follow the health and situation of the leases, properties and finances in an easy and friendly way.

## Dashboards

### General

- TopCards:
    - Give us overview about many metrics of the company like:
    1. Total of leases value: We can follow the growth of leases value month by month.
    2. Count leases: Always needed to keep in mind the amount of leases to manager. 
    3. Ticket: Simply good way to follow also the Growth of revenues.
    4. Renews and Readjustment: Keep eyes on leases with readjustment and renews to contact clients. 
    5. Pending: Follow the pending leases in a range of date. Here we choose +45 pending invoices by default. These are the range of days that normally pending invoices come difficult to receive without a active and intensively  recovery order. 

- Charts:
    - Give us the performance of each grouped property by buildings over the following months and years.

- Tables:
    - Available properties allow us to check really fast witch properties are available and, in the other handle, we can have an really easy access to leases near to the end by switching the tab to Leases to end. It is really useful for agentes handle new clients and follow them up to deal with new leases. (while a CRM is not implemented yet)
    
    New dashboards and views are coming soon to give more specifics insights to the company areas like:
    
    ### Dashboard - Properties
    
    - Follow the vacancy from each building.
    - Identify properties with some difficult to rent.
    - Most valued/devalued kind of property and building. value/m2
    *- consume a crawler tool to analyze the properties rental and compare values from each area*
    - Others properties metrics
    
    ### Dashboard - Leases
    
    - Follow metrics from Leases like most pending leases, most valued leases, etc.
    
    ### Dashboard - Finance
    
    - Follow the financial health of the company with detailed access to paid invoices and manage behavior and reports of each item of invoice.
    - Implement the Feature to generate NFSe (fiscal invoice) with integration with other API
    
    ### Dashboard - Legal
    
    Useful to sponsor and managers monitore in real time the legal sector of the company.
    
    (It's also possible to integrate with some API to keep it sync with some software from Third-party sector working as legal sector)
    
    - Follow leases with pending.
    - Follow payments arrangements.
    - Keep eyes on lawsuit and eviction
    
    Many more features are coming soon.