export default class User {
    constructor(
        public firstName: string,
        public secondName:string,
        public homeWorks: {}[],
        public id: number = Math.floor(Math.random() * 10000),
    ) {}
}
