import { DateTime } from "luxon";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

export default async function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addPassthroughCopy("assets");

  eleventyConfig.addDateParsing(function (dateValue) {
    return DateTime.fromFormat(String(dateValue), "yyyy-MM-dd");
  });

  return {
    pathPrefix: "szymonsli.github.io",
  };
}
