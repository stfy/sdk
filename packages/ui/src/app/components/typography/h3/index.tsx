import { useI18n } from '@solid-primitives/i18n';
import { Component, JSXElement } from 'solid-js';
import { Translateable } from 'src/app/models/translateable';
import { H3Styled } from './style';

interface H3Props extends Translateable {
    children?: JSXElement;
}

export const H3: Component<H3Props> = props => {
    const [t] = useI18n();

    return (
        <H3Styled data-tc-h3="true">
            {props.translationKey
                ? t(props.translationKey, props.translationValues, props.children?.toString())
                : props.children}
        </H3Styled>
    );
};
