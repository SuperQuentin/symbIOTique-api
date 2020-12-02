export interface IDevice {
  _id: string
  name: string
  description: string
  euid: string
  brand: string
  model: string
}

export interface IDeviceDTO {
  name: string
  description: string
  brand: string
  model: string
}