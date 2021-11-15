import company from './companyType';
import OpportunityType from './opportunityType'
import TagType from './TagType'

const filterOpportunities = (opportunities: company[], tag: TagType): company[] => {
    let res = opportunities.filter(opportunity => {
        if (tag.tag === "Full-Time" && opportunity.tag === "Job")
            return true;
        
        if (tag.tag === opportunity.tag)
            return true;

        if (tag.tag === opportunity.tag)
            return true;
    })

    return res;
}

export default filterOpportunities;