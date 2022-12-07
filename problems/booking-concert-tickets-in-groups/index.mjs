// https://leetcode.com/problems/booking-concert-tickets-in-groups/
// node problems/booking-concert-tickets-in-groups/index.mjs

const createAvailability = (count) => {
    let result = ''
    for (let i = 0; i < count; i++) {
        result += '1'
    }
    return result
}

const createUnavailability = (count) => {
    let result = ''
    for (let i = 0; i < count; i++) {
        result += '0'
    }
    return result
}

/**
 * @param {number} n
 * @param {number} m
 */
const BookMyShow = function (n, m) {
    this.rowCount = n;
    this.seatsCountInRow = m;

    const availability = createAvailability(m);
    const seats = [];

    for (let row = 0; row < n; row++) {
        seats.push(availability)
    }

    this.seats = seats;
};

/**
 * @param {string} row
 * @param {number} start
 * @param {number} count
 */
const insertUnavailability = (row, start, count) =>
    row.slice(0, start) +
    createUnavailability(count) +
    row.slice(start + count)

/**
 * @param {number} rowNumber
 * @param {number} startingSeat
 * @param {number} count
 */
BookMyShow.prototype.bookSeats = function (rowNumber, startingSeat, count) {
    this.seats[rowNumber] = insertUnavailability(this.seats[rowNumber], startingSeat, count);
}

/** 
 * @param {number} k 
 * @param {number} maxRow
 * @return {number[]}
 */
BookMyShow.prototype.gather = function (k, maxRow) {
    if (maxRow > this.rowCount) throw new Error(`maxRow (${maxRow}) higher than rowCount (${this.rowCount})`);

    if (k > this.seatsCountInRow) return [];

    const available = createAvailability(k);

    for (let rowNumber = 0; rowNumber <= maxRow; rowNumber++) {
        const row = this.seats[rowNumber];
        const seatNumber = row.indexOf(available);
        if (seatNumber > -1) {
            this.bookSeats(rowNumber, seatNumber, k);
            return [rowNumber, seatNumber]
        }
    }

    return []
};

/** 
 * @param {number} k 
 * @param {number} maxRow
 * @return {boolean}
 */
BookMyShow.prototype.scatter = function (k, maxRow) {
    const snapshot = this.seats.slice();
    let found = 0;

    for (let i = 0; i < k; i++) {
        for (let rowNumber = 0; rowNumber <= maxRow; rowNumber++) {
            const row = snapshot[rowNumber];
            const seatNumber = row.indexOf(1);

            if (seatNumber !== -1) {
                snapshot[rowNumber] = insertUnavailability(row, seatNumber, 1)
                found++
                break;
            }
        }
    }

    if (found === k) {
        this.seats = snapshot;
        return true
    }

    return false
};

/** 
 * Your BookMyShow object will be instantiated and called as such:
 * var obj = new BookMyShow(n, m)
 * var param_1 = obj.gather(k,maxRow)
 * var param_2 = obj.scatter(k,maxRow)
 */

// Tests

import { expect } from 'chai';
import { testData } from './testData.mjs'

testData.forEach(([[_, ...actions], [contrains, ...inputs], [__, ...outputs]]) => {
    const bookMyShow = new BookMyShow(contrains[0], contrains[1]);

    actions.forEach((action, index) => {
        const input = inputs[index];
        const output = outputs[index];

        console.log({ action, input });
        if (action === 'gather') {
            expect(bookMyShow.gather(input[0], input[1])).to.deep.equal(output)
        } else if (action === 'scatter') {
            expect(bookMyShow.scatter(input[0], input[1])).to.equal(output)
        }
    })
})
