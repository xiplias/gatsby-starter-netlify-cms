import CMS from "netlify-cms";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";
import WorkPreview from "./preview-templates/WorkPreview";

CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("work", WorkPreview);
CMS.registerPreviewTemplate("blog", BlogPostPreview);
