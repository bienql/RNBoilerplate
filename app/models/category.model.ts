export interface CategoryRespone {
  category: [
    {
      displayText: string;
      parentCategory: {
        contentItemIds: [];
        contentItems: [
          {
            displayText: string;
            contentType: string;
          },
        ];
      };
      name: string;
      active: boolean;
      sortPriority: string;
      promotionalCategory: boolean;
      menuImage: {
        paths: [];
        urls: [];
      };
      promotionDescription: string;
      modifiedUtc: string;
      contentType: string;
      createdUtc: string;
      publishedUtc: string;
    },
  ];
}
