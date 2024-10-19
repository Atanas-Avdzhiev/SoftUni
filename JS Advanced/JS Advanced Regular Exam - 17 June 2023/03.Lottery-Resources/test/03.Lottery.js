import { expect } from "chai";
import { lottery } from "../Lottery.js";

describe("lottery Tests", function () {

    describe("buyLotteryTicket", function () {

        it("", function () {
            expect(() => lottery.buyLotteryTicket(5, 5, false)).to.throw('Unable to buy lottery ticket!');
            expect(() => lottery.buyLotteryTicket(-5, 5, true)).to.throw('Invalid input!');
            expect(() => lottery.buyLotteryTicket(5, 0, true)).to.throw('Invalid input!');
            expect(() => lottery.buyLotteryTicket('not number', 5, true)).to.throw('Invalid input!');
            expect(() => lottery.buyLotteryTicket(5, 'not number', true)).to.throw('Invalid input!');
            expect(() => lottery.buyLotteryTicket('not number', 'not number', true)).to.throw('Invalid input!');
            expect(() => lottery.buyLotteryTicket(5, 5, 'not boolean')).to.throw('Invalid input!');
            expect(lottery.buyLotteryTicket(5, 6, true)).to.equal('You bought 6 tickets for 30$.');
        });

    });

    describe("checkTicket", function () {

        it("", function () {
            expect(() => lottery.checkTicket(5, 'string')).to.throw('Invalid input!');
            expect(() => lottery.checkTicket(5, [])).to.throw('Invalid input!');
            expect(() => lottery.checkTicket([], {})).to.throw('Invalid input!');
            expect(() => lottery.checkTicket([], [])).to.throw('Invalid input!');
            expect(() => lottery.checkTicket([1, 2, 3, 4, 5], [1, 2, 3, 4, 5])).to.throw('Invalid input!');
            expect(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6, 7, 8])).to.throw('Invalid input!');
            expect(() => lottery.checkTicket([1, 2, 3, 4, 5, 6, 7, 8], [1, 2, 3, 4, 5, 6])).to.throw('Invalid input!');
            expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 7, 8, 9])).to.equal('Congratulations you win, check your reward!');
            expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 8, 9])).to.equal('Congratulations you win, check your reward!');
            expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 9])).to.equal('Congratulations you win, check your reward!');
            expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6])).to.equal('You win the JACKPOT!!!');
        });

    });

    describe("secondChance", function () {

        it("", function () {
            expect(() => lottery.secondChance(5, 'string')).to.throw('Invalid input!');
            expect(() => lottery.secondChance('not number', [])).to.throw('Invalid input!');
            expect(() => lottery.secondChance('not number', 5)).to.throw('Invalid input!');
            expect(lottery.secondChance(5, [1, 2, 3, 4, 5, 6])).to.equal('You win our second chance prize!');
            expect(lottery.secondChance(7, [1, 2, 3, 4, 5, 6])).to.equal("Sorry, your ticket didn't win!");
        });

    });

});