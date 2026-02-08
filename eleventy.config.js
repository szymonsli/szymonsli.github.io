import { DateTime } from "luxon";
import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import { I18nPlugin } from "@11ty/eleventy";

export default async function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(I18nPlugin, {
    defaultLanguage: "pl",
    errorMode: "allow-fallback",
  });

  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/css");

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
