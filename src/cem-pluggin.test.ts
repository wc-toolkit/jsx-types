import { describe, expect, test } from "vitest";
import cem from '../demo/custom-elements.json' with { type: 'json' };
import { Component, getComponentByClassName } from "@wc-toolkit/cem-utilities";

type TagContent = {
  name: string;
  description: string;
};
type ExtComponent = Component & {
  dependencies: TagContent[];
  status: TagContent;
};

describe('cem-inheritance', () => {
  const component = getComponentByClassName<ExtComponent>(cem, 'MyComponent');

  test('should inherit APIs from parent', () => {
    // Arrange
      
    // Act
    
    // Assert
    expect((component?.dependencies)?.length).toEqual(2);
    expect(component?.status?.name).toEqual('beta');
    expect(component?.status?.description).toEqual('A beta component');
  });
});