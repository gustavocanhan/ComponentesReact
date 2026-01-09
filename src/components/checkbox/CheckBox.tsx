type CheckBoxProps = {
  nameChk: string;
  valueChk: string;
  labelChk: string;
  isDisabled: boolean;
};

export default function CheckBox({
  nameChk,
  valueChk,
  labelChk,
  isDisabled,
}: CheckBoxProps) {
  return (
    <label className="flex gap-2">
      <input
        type="checkbox"
        name={nameChk}
        value={valueChk}
        className="accent-accent-foreground"
        disabled={isDisabled}
      />
      {labelChk}
    </label>
  );
}
