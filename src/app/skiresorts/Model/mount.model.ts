export class Mount{
    _id: number;
    name: string;
    description: string;
    country: string;
    highest_point: number;
    top_elevation_m: number;
    base_elevation_m: number;
    picture: string;

    constructor(obj?:any){
        this._id = obj && obj._id || null;
        this.name = obj && obj.name || null;
        this.description = obj && obj.description || null;
        this.country = obj && obj.country || null;
        this.highest_point = obj && obj.highest_point || null;
        this.top_elevation_m = obj && obj.top_elevation_m || null;
        this.base_elevation_m = obj && obj.base_elevation_m || null;
        this.picture = obj && obj.picture || null;

    }
}