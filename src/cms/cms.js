import CMS from "netlify-cms";

import NewsPostPreview from "./preview-templates/NewsPostPreview";
import WorkPreview from "./preview-templates/WorkPreview";

CMS.registerPreviewTemplate("work", WorkPreview);
CMS.registerPreviewTemplate("news", NewsPostPreview);
