import {CustomerStatus} from "@type/Status";

export const getStatus = (absence): CustomerStatus => {
    if (absence.confirmedAt){
        return CustomerStatus.confirmed
    } else if (absence.rejectedAt){
        return CustomerStatus.rejected
    } else {
        return CustomerStatus.requested
    }
}