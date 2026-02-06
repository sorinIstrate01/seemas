import fs from "fs";
import path from "path";

export interface NewsArticleContent {
  title: string;
  description: string;
}

/**
 * Extracts title and description from an MDX file
 * @param filePath - Relative path to the MDX file from the news directory
 * @returns Object with title and description
 */
export function extractNewsContent(filePath: string): NewsArticleContent {
  try {
    const fullPath = path.join(process.cwd(), "src/content/sphere/", filePath);
    const content = fs.readFileSync(fullPath, "utf8");

    // Remove import statements first
    const contentWithoutImports = content.replace(/^import\s+.*$/gm, "").trim();

    // Extract title (first H1 heading)
    const titleMatch = contentWithoutImports.match(/^#\s+(.+)$/m);
    const title = titleMatch ? titleMatch[1].trim() : "";

    // Extract description - everything after the title until first link/component
    let description = "";

    if (titleMatch) {
      // Find the position after the title line
      const titleIndex = contentWithoutImports.indexOf(titleMatch[0]);
      const afterTitle = contentWithoutImports.substring(
        titleIndex + titleMatch[0].length
      );

      // Get text until first markdown formatting (**, #), MdxLink component or markdown link
      const linkMatch = afterTitle.match(/(^\*\*|^#|<MdxLink|^- \[)/m);
      const descriptionText = linkMatch
        ? afterTitle.substring(0, linkMatch.index)
        : afterTitle;

      // Clean up the description
      description = descriptionText
        .trim() // Remove leading/trailing whitespace
        .replace(/\n\s*\n/g, " ") // Replace paragraph breaks with single space
        .replace(/\s+/g, " "); // Replace multiple spaces with single space
    }

    return {
      title,
      description,
    };
  } catch (error) {
    console.warn(`Failed to extract content from ${filePath}:`, error);
    return {
      title: "",
      description: "",
    };
  }
}

/**
 * Extracts content from multiple MDX files in a directory
 * @param directoryPath - Relative path to the directory from the news folder
 * @returns Array of content objects with filePath included
 */
export function extractBulkNewsContent(
  directoryPath: string
): (NewsArticleContent & { filePath: string })[] {
  try {
    const fullDirPath = path.join(
      process.cwd(),
      "src/content/sphere/news",
      directoryPath
    );
    const files = fs
      .readdirSync(fullDirPath)
      .filter(file => file.endsWith(".mdx"));

    return files.map(file => {
      const filePath = path.join(directoryPath, file).replace(/\\/g, "/"); // Normalize path separators
      const content = extractNewsContent(filePath);

      return {
        ...content,
        filePath,
      };
    });
  } catch (error) {
    console.warn(
      `Failed to extract bulk content from ${directoryPath}:`,
      error
    );
    return [];
  }
}

/**
 * Helper to get news content by country
 */
export const getNewsByCountry = {
  italy: () => extractBulkNewsContent("Italy"),
  uk: () => extractBulkNewsContent("UK"),
  usa: () => extractBulkNewsContent("United states"),
  canada: () => extractBulkNewsContent("Canada"),
  australia: () => extractBulkNewsContent("Australia"),
  mexico: () => extractBulkNewsContent("Mexico"),
  india: () => extractBulkNewsContent("India"),
};
