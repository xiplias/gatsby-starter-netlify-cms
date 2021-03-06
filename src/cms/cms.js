import CMS from 'netlify-cms'

import NewsPostPreview from './preview-templates/NewsPostPreview'
import WorkPreview from './preview-templates/WorkPreview'
import EmployeePreview from './preview-templates/EmployeePreview'

CMS.registerPreviewTemplate('work', WorkPreview)
CMS.registerPreviewTemplate('news', NewsPostPreview)
CMS.registerPreviewTemplate('employees', EmployeePreview)
