import {Counter} from "./counter"
describe('Counter', () => {
    describe('increment()', () => {
        let counter
        beforeEach(() => {
            counter = new Counter(1);
            counter.increment()
        })
        test('increment', () => {
            expect(counter.count).toBe(2)
        })
    })
})