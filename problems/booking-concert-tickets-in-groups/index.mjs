// https://leetcode.com/problems/booking-concert-tickets-in-groups/
// node problems/booking-concert-tickets-in-groups/index.mjs

/**
 * @param {number} n
 * @param {number} m
 */
const BookMyShow = function (n, m) {
    this.rowCount = n;
    this.seatsCountInRow = m;
    this.bookedSeatsCountByRow = {};
    this.rowsFullyBooked = 0;
    this.totalSeatCount = m * n;
};

/**
 * @param {number} rowNumber
 * @param {number} startingSeat
 * @param {number} count
 */
BookMyShow.prototype.bookSeats = function (rowNumber, count) {
    this.bookedSeatsCountByRow[rowNumber] = (this.bookedSeatsCountByRow[rowNumber] || 0) + count;
}

BookMyShow.prototype.getAvailableSeat = function (rowNumber, count) {
    const bookedCount = this.bookedSeatsCountByRow[rowNumber] || 0;
    const availableCount = this.seatsCountInRow - bookedCount;

    if (availableCount < count) return false;

    return bookedCount // seat number
}

/** 
 * @param {number} k 
 * @param {number} maxRow
 * @return {number[]}
 */
BookMyShow.prototype.gather = function (k, maxRow) {
    // console.time("gather");
    if (maxRow > this.rowCount) throw new Error(`maxRow (${maxRow}) higher than rowCount (${this.rowCount})`);

    if (k > this.seatsCountInRow) return [];

    for (let rowNumber = 0; rowNumber <= maxRow; rowNumber++) {
        const seat = this.getAvailableSeat(rowNumber, k)
        if (seat !== false) {
            this.bookSeats(rowNumber, k);
            // console.timeEnd("gather");
            return [rowNumber, seat]
        }
    }

    // console.timeEnd("gather");
    return []
};

/** 
 * @param {number} k 
 * @param {number} maxRow
 * @return {boolean}
 */
BookMyShow.prototype.scatter = function (k, maxRow) {
    // console.time("scatter");

    if ((maxRow + 1) * this.seatsCountInRow < k) { 
        // invalid request, there is not enough seats for such group size & requested row constraint
        // console.timeEnd("scatter");
        return false;
    }

    let snapshot = { ...this.bookedSeatsCountByRow };
    let snapshot2 = this.rowsFullyBooked;

    if (this.totalSeatCount - (snapshot2 * this.seatsCountInRow) < k) {
        // invalid request, there is not enough seats REMAINING for such group size & requested row constraint
        // console.timeEnd("scatter");
        return false;
    }

    let seated = 0;
    let rowNumber = this.rowsFullyBooked;
    let remainingToBeSeated = k;

    while (remainingToBeSeated > 0 && rowNumber <= maxRow) {
        const bookedCount = snapshot[rowNumber] || 0;
        const availableCount = this.seatsCountInRow - bookedCount;

        if (availableCount > 0) {
            const toFitInThisRow = Math.min(availableCount, remainingToBeSeated);
            if (toFitInThisRow === availableCount) snapshot2++
            snapshot[rowNumber] = (snapshot[rowNumber] || 0) + toFitInThisRow
            seated += toFitInThisRow;
            remainingToBeSeated -= toFitInThisRow;
        }

        rowNumber++;
    }

    if (seated === k) {
        this.bookedSeatsCountByRow = snapshot;
        this.rowsFullyBooked = snapshot2;
        // console.timeEnd("scatter");
        return true
    }

    // console.timeEnd("scatter");
    return false
};

// Tests

import { expect } from 'chai';
import { testData } from './testData.mjs'
import { mixTestCase } from './mixTestCase/index.mjs'
import { scatterTestCase } from './scatterTestCase/index.mjs'
import { scatterTestCase2 } from './scatterTestCase2/index.mjs'
import { gatherTestCase } from './gatherTestCase/index.mjs'
import fs from 'fs';

[
    ...testData,
    mixTestCase,
    scatterTestCase,
    scatterTestCase2,
    gatherTestCase,
].forEach(([
    [_, ...actions],
    [contrains, ...inputs],
    [__, ...outputs],
    logOutputToFile
], index) => {
    const bookMyShow = new BookMyShow(contrains[0], contrains[1]);

    console.log('BookMyShow', {
        rows: contrains[0],
        seats: contrains[1],
        testIndex: index + 1,
        actions: actions.length
    })

    let results = [];

    actions.forEach((action, index) => {
        const input = inputs[index];
        const output = outputs[index];

        const result = bookMyShow[action](input[0], input[1]);

        if (logOutputToFile) {
            results.push(result)
        } else {
            expect(result).to.deep.equal(output)
        }
    })
    if (logOutputToFile) {
        fs.writeFileSync('./outputs.txt', JSON.stringify(results), { encoding: 'utf-8' })
    }
})
