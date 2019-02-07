import CMS from "netlify-cms";

import BlogPostPreview from "./preview-templates/BlogPostPreview";
import WorkPreview from "./preview-templates/WorkPreview";
CMS.registerPreviewTemplate("work", WorkPreview);
CMS.registerPreviewTemplate("blog", BlogPostPreview);
