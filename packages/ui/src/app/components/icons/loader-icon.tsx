import cn from 'classnames';
import type { Property } from 'csstype';
import { Component } from 'solid-js';
import { css, keyframes, useTheme } from 'solid-styled-components';
import { Styleable } from 'src/app/models/styleable';

export interface LoaderIconProps extends Styleable {
    fill?: Property.Color;
    size?: 's' | 'm';
}

export const LoaderIcon: Component<LoaderIconProps> = props => {
    const theme = useTheme();

    const size = (): 's' | 'm' => props.size || 's';
    const fill = (): string => props.fill || theme.colors.icon.tertiary;

    const rotateAnimation = keyframes`
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
    `;

    const svgClass = css`
        animation: ${rotateAnimation} 1s linear infinite;
    `;

    return (
        <>
            {size() === 's' ? (
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class={cn(svgClass, props.class)}
                >
                    <path
                        d="M15.55 5.85123C18.9459 7.81184 20.1094 12.1541 18.1488 15.55C16.1882 18.9459 11.8459 20.1094 8.44998 18.1488C8.01952 17.9003 7.46909 18.0478 7.22056 18.4782C6.97203 18.9087 7.11952 19.4591 7.54998 19.7076C11.8068 22.1653 17.2499 20.7068 19.7076 16.45C22.1653 12.1932 20.7068 6.75005 16.45 4.29239C12.1932 1.83472 6.75003 3.29321 4.29236 7.55001C4.04383 7.98047 4.19132 8.53091 4.62178 8.77943C5.05224 9.02796 5.60268 8.88048 5.8512 8.45001C7.81181 5.05413 12.1541 3.89062 15.55 5.85123Z"
                        fill={fill()}
                    />
                </svg>
            ) : (
                <svg
                    width="72"
                    height="72"
                    viewBox="0 0 72 72"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class={cn(svgClass, props.class)}
                >
                    <path
                        d="M24 56.7846C35.479 63.412 50.1572 59.479 56.7846 47.9999C63.412 36.5209 59.479 21.8427 48 15.2153C36.521 8.58791 21.8428 12.5209 15.2154 23.9999"
                        stroke={fill()}
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            )}
        </>
    );
};
