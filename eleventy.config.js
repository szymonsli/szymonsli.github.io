import { DateTime } from "luxon";

export default async function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");

  eleventyConfig.addDateParsing(function (dateValue) {
    return DateTime.fromFormat(String(dateValue), "yyyy-MM-dd");
  });
}
