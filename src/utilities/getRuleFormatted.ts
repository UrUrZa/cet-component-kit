import { IRule } from "../types/domain";
import { getPeriodicityMessage, getTimeRepresentation } from "./getWeekDayRepresentation";

export const getRuleFormatted = (rules: IRule[]): string => {

  const representationsRule: string[] = rules.map((rule) => {
    const ruleText = getPeriodicityMessage(rule.periodicity);

    const timeStartText = getTimeRepresentation(rule.periodicity, rule.timeStart);

    return `${ruleText} at ${timeStartText}`;
  });

  const ruleFormatted = representationsRule.join(', ');

  return ruleFormatted;
}
