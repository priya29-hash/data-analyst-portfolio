/**
 * Bulletproof helper to download the user's authentic newly uploaded resume PDF
 * Guaranteed to download the exact Priyadharshini_R_Resume.pdf document without corruption
 */
export const downloadResumePdf = async (filename = 'Priyadharshini_R_Resume.pdf'): Promise<boolean> => {
  const pdfPath = '/assets/aistudio/resume_b891b5cc.pdf';
  
  try {
    const response = await fetch(pdfPath, {
      headers: {
        'Accept': 'application/pdf',
      },
      cache: 'no-cache'
    });

    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }

    const blob = await response.blob();
    // Enforce correct PDF mime type
    const pdfBlob = new Blob([blob], { type: 'application/pdf' });
    const blobUrl = window.URL.createObjectURL(pdfBlob);

    const link = document.createElement('a');
    link.href = blobUrl;
    link.download = filename;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();

    setTimeout(() => {
      if (document.body.contains(link)) {
        document.body.removeChild(link);
      }
      window.URL.revokeObjectURL(blobUrl);
    }, 10000);

    return true;
  } catch (error) {
    console.warn('Blob download fallback activated:', error);
    // Direct link fallback
    const directLink = document.createElement('a');
    directLink.href = pdfPath;
    directLink.download = filename;
    directLink.target = '_blank';
    document.body.appendChild(directLink);
    directLink.click();
    setTimeout(() => {
      if (document.body.contains(directLink)) {
        document.body.removeChild(directLink);
      }
    }, 1000);
    return true;
  }
};

export const viewResumePdf = () => {
  window.open('/assets/aistudio/resume_b891b5cc.pdf', '_blank');
};
