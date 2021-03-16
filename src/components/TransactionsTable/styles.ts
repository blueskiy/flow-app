import styled from 'styled-components'

export const Container = styled.div`
    margin-top: 4rem;

    table {
        width: 100%;
        border-spacing: 0 0.5rem;

        th,
        td {
            padding: 1rem 2rem;
        }

        th {
            color: var(--text-body);
            font-weight: 400;
            text-align: left;
            line-height: 1.5rem;
        }

        tr {
            border-radius: 1rem;

            td {
                border: 0;
                color: var(--text-body);
                background-color: var(--shape);

                &:first-child {
                    color: var(--text-title);
                }

                &.deposit {
                    color: var(--green);
                }

                &.withdraw {
                    color: var(--red);
                }
            }
        }
    }
`;