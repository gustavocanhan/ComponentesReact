import CheckBox from "./CheckBox";

export default function CheckBoxPreview() {
  return (
    <div className="flex flex-col gap-2">
      <CheckBox
        labelChk="JavaScript"
        nameChk="tech"
        valueChk="js"
        isDisabled={false}
      />
      <CheckBox
        labelChk="TypeScript"
        nameChk="tech"
        valueChk="ts"
        isDisabled={true}
      />
      <CheckBox labelChk="C#" nameChk="tech" valueChk="c#" isDisabled={false} />
    </div>
  );
}
