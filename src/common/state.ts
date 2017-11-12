import {Session} from "./services/session/index";
export interface Auth {
    _token:string

}

export interface Thread {
    avatar: string,
    object: string,
    _id: number,
    subject: string,
    last_read: number,
    join_date: number,
    created_at: number,
    updated_at: number
}

export interface State {
    threads:Thread[],
    session:Session
}
