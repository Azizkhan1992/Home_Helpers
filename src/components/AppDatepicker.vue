<template>
  <div class="calendar-container">
    <div class="calendar-wrapper" v-if="datepickerActive">
      <div class="datepicker-top">
        <button class="prev-date" @click.stop="goPrevYear"></button>
        <button class="prev-month" @click.stop="goPrevMonth"></button>
        <p
          class="chosen-year"
          @click.stop="(chooseYear = true), (chooseMonth = false)"
        >
          {{ today.getFullYear() }}
        </p>
        <p class="chosen-month" @click.stop="chooseMonth = true">
          {{ months[today.getMonth()].label }}
        </p>
        <button class="next-month" @click.stop="goNextMonth"></button>
        <button class="next-date" @click.stop="goNextYear"></button>
      </div>

      <div v-if="!chooseYear && !chooseMonth">
        <table class="weekdays days">
          <th>Mon</th>
          <th>Tue</th>
          <th>Wed</th>
          <th>Thu</th>
          <th>Fri</th>
          <th>Sat</th>
          <th class="weekend">Sun</th>
        </table>

        <table class="month-days">
          <tr
            v-for="(day, idx) in currentMonthBlock"
            :key="idx"
            @click.stop="changeDate(day)"
            :class="
              currentDayChecker(day)
                ? 'current-day'
                : '' || activeDayChecker(day)
                ? 'active-day'
                : '' || currentMonthChecker(day)
                ? ''
                : 'not-currrent-month'
            "
          >
            {{
              day.getDate()
            }}
          </tr>
        </table>
      </div>

      <div v-else-if="chooseMonth" class="months-years">
        <hr />
        <table>
          <tr
            v-for="(mon, idx) in months"
            :key="idx"
            @click.stop="changeMonthValue(idx)"
          >
            {{
              mon.shortLabel
            }}
          </tr>
        </table>
      </div>

      <div v-else class="months-years">
        <hr />
        <table>
          <tr
            v-for="(year, idy) in years"
            :key="idy"
            @click.stop="changeYearValue(year)"
          >
            {{
              year
            }}
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "app-datepicker",
  props: {
    datepickerActive: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      newMonth: 0,
      newDate: 0,
      newYear: 0,
      years: [],
      changeYearList: 0,
      currentMonthBlock: [],
      currentMonth: [],
      previousMonth: [],
      nextMonth: [],
      curDay: "",
      chooseYear: false,
      chooseMonth: false,
      months: [
        { label: "Yanvar", val: 1, shortLabel: "Yan" },
        { label: "Fevral", val: 2, shortLabel: "Fev" },
        { label: "Mart", val: 3, shortLabel: "Mar" },
        { label: "Aprel", val: 4, shortLabel: "Apr" },
        { label: "May", val: 5, shortLabel: "May" },
        { label: "Iyun", val: 6, shortLabel: "Iyun" },
        { label: "Iyul", val: 7, shortLabel: "Iyul" },
        { label: "Avgust", val: 8, shortLabel: "Avg" },
        { label: "Sentabr", val: 9, shortLabel: "Sen" },
        { label: "Oktabr", val: 10, shortLabel: "Okt" },
        { label: "Noyabr", val: 11, shortLabel: "Noy" },
        { label: "Dekabr", val: 12, shortLabel: "Dek" },
      ],
    };
  },
  mounted() {
    this.getCurrentDate();
    this.getCurrentMonth();
    this.createMonth();
    this.getPreviousMonth();
    this.createMonth();
    this.getNextMonth();
    this.currentDaySetter();
    this.getYears();
  },
  computed: {
    today() {
      let currDate = new Date(this.newYear, this.newMonth, this.newDate);
      // console.log(currDate)
      return currDate;
    },
  },
  methods: {
    getYears() {
      let date = new Date();
      let currDate = new Date(
        date.getFullYear() - this.changeYearList,
        date.getMonth(),
        date.getDate()
      );
      for (
        let i = currDate.getFullYear();
        i < currDate.getFullYear() + 12;
        i++
      ) {
        this.years.push(i);
      }
    },
    getCurrentDate() {
      let newDate = new Date();
      this.newMonth = newDate.getMonth();
      this.newYear = newDate.getFullYear();
      this.newDate = newDate.getDate();
    },
    getCurrentMonth() {
      let year = this.today.getFullYear();
      let month = this.today.getMonth();

      this.currentMonth = [];
      const date = new Date(year, month, 1);

      while (date.getMonth() === month) {
        this.currentMonth.push(new Date(date));
        date.setDate(date.getDate() + 1);
      }
    },
    createMonth() {
      const weekday = this.currentMonth[0]?.getDay();
      if (weekday > 1 && weekday <= 6) {
        this.currentMonthBlock = this.previousMonth.slice(-(weekday - 1));
        this.currentMonthBlock = this.currentMonthBlock.concat(
          this.currentMonth
        );

        for (
          let i = 0;
          i < 42 - (weekday - 1 + this.currentMonth.length);
          i++
        ) {
          if (this.nextMonth.length) {
            this.currentMonthBlock.push(this.nextMonth[i]);
          }
        }
      } else if (weekday === 0) {
        this.currentMonthBlock = this.previousMonth.slice(-6);
        this.currentMonthBlock = this.currentMonthBlock.concat(
          this.currentMonth
        );

        for (let i = 0; i < 42 - (this.currentMonth.length + 6); i++) {
          if (this.nextMonth.length) {
            this.currentMonthBlock.push(this.nextMonth[i]);
          }
        }
      }
    },
    getPreviousMonth() {
      let year = this.today.getFullYear();
      let month = this.today.getMonth() - 1;

      this.previousMonth = [];

      const date = new Date(year, month, 1);

      while (date.getMonth() === month) {
        this.previousMonth.push(new Date(date));
        date.setDate(date.getDate() + 1);
      }
    },
    getNextMonth() {
      let year = this.today.getFullYear();
      let month = this.today.getMonth() + 1;

      this.nextMonth = [];

      const date = new Date(year, month, 1);

      while (date.getMonth() === month) {
        this.nextMonth.push(new Date(date));
        date.setDate(date.getDate() + 1);
      }
      // console.log(this.nextMonth)
    },
    currentDayChecker(val) {
      let date = new Date();
      if (
        val.getDate() === date.getDate() &&
        val.getMonth() === date.getMonth() &&
        val.getFullYear() === date.getFullYear()
      ) {
        return true;
      } else return false;
    },
    activeDayChecker(val) {
      if (
        val.getDate() === this.curDay.getDate() &&
        val.getMonth() === this.curDay.getMonth() &&
        val.getFullYear() === this.curDay.getFullYear()
      ) {
        return true;
      } else return false;
    },
    currentDaySetter() {
      this.curDay = this.today;
    },
    changeDate(val) {
      this.newDate = val.getDate();
      this.newMonth = val.getMonth();
      this.newYear = val.getFullYear();
      this.currentDaySetter();

      const result = this.today.toLocaleDateString("en-GB", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });

      this.$emit("date", result);
    },
    changeMonthValue(val) {
      this.chooseMonth = false;
      this.chooseYear = false;
      this.newMonth = val;
      this.currentDaySetter();
      this.getPreviousMonth();
      this.getCurrentMonth();
      this.getNextMonth();
      this.createMonth();
    },
    currentMonthChecker(val) {
      if (val.getMonth() === this.today.getMonth()) {
        return true;
      } else return false;
    },
    changeYearValue(val) {
      this.chooseMonth = !this.chooseMonth;
      this.newYear = val;
      this.getPreviousMonth();
      this.getCurrentMonth();
      this.getNextMonth();
      this.createMonth();
      this.currentDaySetter();
    },
    goPrevYear() {
      if (!this.chooseYear && !this.chooseMonth) {
        this.newYear--;
        this.getPreviousMonth();
        this.getCurrentMonth();
        this.getNextMonth();
        this.createMonth();
        this.currentDaySetter();
      }
    },
    goNextYear() {
      if (!this.chooseYear && !this.chooseMonth) {
        this.newYear++;
        this.getPreviousMonth();
        this.getCurrentMonth();
        this.getNextMonth();
        this.createMonth();
        this.currentDaySetter();
      }
    },
    goPrevMonth() {
      this.newMonth--;
      if (this.newMonth < 0) {
        (this.newMonth = 11), this.newYear--;
      }
      this.getPreviousMonth();
      this.getCurrentMonth();
      this.getNextMonth();
      this.createMonth();
      this.currentDaySetter();
    },
    goNextMonth() {
      this.newMonth++;
      if (this.newMonth > 11) {
        this.newMonth = 0;
        this.newYear++;
      }
      this.getPreviousMonth();
      this.getCurrentMonth();
      this.getNextMonth();
      this.createMonth();
      this.currentDaySetter();
    },
  },
};
</script>
<style lang="scss">
@import "@/assets/styles/mixins";

.calendar-container {
  width: 100%;
  height: auto;
  position: relative;
  z-index: 500;

  .calendar-wrapper {
    @include Flex(column, space-around);
    position: absolute;
    top: 10px;
    width: 335px;
    height: auto;
    border-radius: 4px;
    border: 1px solid #dde0e7;
    background: #ffffff;
    overflow: hidden;
    padding: 24px;
    box-sizing: border-box;
    z-index: 500;

    .datepicker-top {
      width: 100%;
      height: 20px;
      @include Flex(row, center);
      gap: 24px;
      margin-bottom: 10px;

      p {
        @include Flex;
        @include Font(1.15rem, 20px, 500);
        color: #a4abbd;
        cursor: pointer;
        text-align: center;
        width: 120px;

        &:hover {
          color: #e6a958;
        }
      }

      button {
        width: 36px;
        height: 36px;
        font-size: 1rem;
        background: #ffffff;
        border: 0;
        cursor: pointer;
        padding: 0;
        @include Flex;

        &.prev-month {
          width: 24px;
          height: 24px;
          &::before {
            content: "\2039";
          }
        }
        &.prev-date {
          width: 24px;
          height: 24px;
          &::before {
            content: "\00AB";
          }
        }

        &.next-month {
          width: 24px;
          height: 24px;
          &::before {
            content: "\203A";
          }
        }
        &.next-date {
          width: 24px;
          height: 24px;
          &::before {
            content: "\00BB";
          }
        }
      }
    }
    .weekdays {
      width: 100%;
      height: 36px;
      display: flex;
      flex-direction: row;
      gap: 6px;

      th {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        font-size: 0.75rem;
        line-height: 20px;
        font-weight: 600;
        color: #a4abbd;

        &.weekend {
          color: #eb194c;
        }
      }
    }
    .month-days {
      display: grid;
      row-gap: 6px;
      column-gap: 6px;
      margin-top: 6px;
      grid-row: 1/7;
      grid-template-columns: repeat(7, 36px);
      grid-template-rows: 6;

      tr {
        width: 36px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 20px;
        cursor: pointer;
        font-size: 0.85rem;
        line-height: 20px;
        font-weight: 600;
        text-align: center;
        color: #a4abbd;

        &:hover {
          color: #e6a958;
        }

        &.current-day {
          background-color: #e6a958;
          color: #ffffff;

          &:hover {
            color: #ffffff;
            cursor: default;
          }
        }

        &.active-day {
          border: 1px solid #e6a958;
          color: #e6a958;
          box-sizing: border-box;
        }
        .not-current-month {
          color: #a4abbd;
        }
      }
    }

    .months-years {
      width: 100%;
      height: auto;
      hr {
        margin-top: 20px;
      }

      table {
        display: grid;
        -moz-column-gap: 36px;
        margin-top: 6px;
        grid-row: 1/3;
        grid-template-columns: repeat(3, 33%);
        grid-template-rows: 3;

        tr {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 64px;
          height: 64px;
          font-size: 1.15rem;
          line-height: 20px;
          border-radius: 20px;
          margin: 0 auto;
          cursor: pointer;
          padding: 20px 3px;
          box-sizing: border-box;
          text-align: center;
          color: #a4abbd;

          &:hover {
            color: #e6a958;
          }
        }
      }
    }
  }
}
</style>
