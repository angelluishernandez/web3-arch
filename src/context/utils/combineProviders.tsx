import React from "react";

// Simple combine components function to allow the combination of multiple providers.
// Typology can and should be improved

export const combineProviders = (...components: any): any => {
  return components.reduce(
    (AccumulatedComponents: any, CurrentComponent: any) => {
      return ({ children }: any): JSX.Element => {
        return (
          <AccumulatedComponents>
            <CurrentComponent>{children}</CurrentComponent>
          </AccumulatedComponents>
        );
      };
    },
    ({ children }: any) => <>{children}</>
  );
};
