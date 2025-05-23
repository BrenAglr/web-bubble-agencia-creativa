import { IDetail } from "./detail";

export interface IService {
    slug: string,
    name:  string,
    description: string,
    detail: IDetail[],
    link: string,
    from: string,
    to: string,
}