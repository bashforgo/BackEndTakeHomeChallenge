interface Data {
  title: string
  url: string
}

export default interface IGif {
  toObject(): Data
}
