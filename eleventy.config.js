import { DateTime } from "luxon";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";

export default async function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/_includes");

  eleventyConfig.addDateParsing(function (dateValue) {
    return DateTime.fromFormat(String(dateValue), "yyyy-MM-dd");
  });

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
}
