import ComponentBox from "./ComponentBox";
import ComponentBoxName from "./ComponentBoxName";

import BoxMainContent from "./ComponentBoxMainContent";
import BoxMainContentName from "./BoxMainContentName";
import BoxMainContentItems from "./BoxMainContentItems";
import BoxCodeContainer from "./BoxCodeContainer";

ComponentBox.Name = ComponentBoxName;
ComponentBox.BoxMainContent = BoxMainContent;

BoxMainContent.Name = BoxMainContentName;
BoxMainContent.Items = BoxMainContentItems;
BoxMainContent.Code = BoxCodeContainer;

export { ComponentBox, BoxMainContent };
