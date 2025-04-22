import { useEffect, useState } from "react";

export default function ThemeMessageBlock({ tagMessage }) {
  if (!tagMessage) return null;

  return (
    <div className={`tagtalk-block tagtalk-style-${tagMessage.style}`}>
      {tagMessage.icon && <img src={`/icons/${tagMessage.icon}.svg`} alt="" />}
      <span>{tagMessage.message}</span>
    </div>
  );
}
