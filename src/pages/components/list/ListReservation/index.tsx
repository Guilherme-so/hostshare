import React from "react";
import { Range } from "react-date-range";
import Calendar from "../../Calendar/index";
import Button from "../../Button";

interface ListReservationProps {
  data: any;
  dateRange: Range;
  totalPrice: number;
  onChangeDate: (value: Range) => void;
  disabled?: boolean;
}

export default function ListReservation({
  data,
  dateRange,
  onChangeDate,
  totalPrice,
  disabled,
}: ListReservationProps) {
  return (
    <div className="bg-white rounded-xl border-[1px] border-neutral-200 overflow-hidden">
      <div className="flex flex-row items-center gap-1 p-4">
        <div className="text-2xl font-semibold">$ {data?.info.price}</div>
        <div className="font-light text-neutral-600">night</div>
      </div>
      <hr />
      <Calendar
        value={dateRange}
        onChange={(value) => onChangeDate(value.selection)}
      />
      <hr />
      <div className="p-4">
        <Button disabled={disabled} label="Reserve"  onClick={()=>{}} />
      </div>
      <hr />
      <div
        className="
      p-4 
      flex 
      flex-row 
      items-center 
      justify-between
      font-semibold
      text-lg
    "
      >
        <div>Total</div>
        <div>$ {totalPrice}</div>
      </div>
    </div>
  );
}
