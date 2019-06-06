export interface IActivity{
    id: number,    
    name: string,
    location: string,
    description: string,
    dateTime: Date,
    creatorId: number,
    givesPoints: boolean,
    cancelled: boolean,
    updatedAt : Date,
    createdAt : Date
}