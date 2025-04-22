export function buildLineItemProperty(tagMessage) {
  return {
    key: "_tagtalk_message",
    value: `${tagMessage.message} | ${tagMessage.style} | ${tagMessage.icon || "none"}`,
  };
}
