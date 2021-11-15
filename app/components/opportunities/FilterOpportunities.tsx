import OpportunityType from './opportunityType'
import TagType from './TagType'

const filterOpportunities = (opportunities: OpportunityType[], tag: TagType): OpportunityType[] => {
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