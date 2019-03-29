export default class Homework {
    constructor(
        public topic: string,
        public task: string,
        public status: 'done' | 'not done',
    ) {}
}