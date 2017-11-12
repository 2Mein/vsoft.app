export enum City {
    Amsterdam = 'amsterdam',
    London = 'londen',
    Moskou = 'moscow',
    Tokio = 'tokyo'
}

export interface Time {
    timestamp: number,
    seconds: number,
    location: City,
    loading: boolean,
    error?: Error
}

export interface Color {
    main: string,
    title: string
}

export interface ColorConfig {
    useColor: boolean,
    color: Color,
}

export interface Thread {
    id: string,
    subject: string,
    updated_at: Date
}

export const reddish = { main: '#d00', title: '#888' } as Color
export const greenish = { main: '#0f0', title: '#000' } as Color
export const blueish = { main: '#00b', title: '#fff' } as Color

export interface State {
    threads:Thread[],
    time: Time,
    colorConfig: ColorConfig,
}
